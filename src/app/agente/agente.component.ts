import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';
import { Agente } from '../interfaces/agente.interface';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-agente',
  templateUrl: './agente.component.html',
  styleUrls: ['./agente.component.css']
})
export class AgenteComponent implements OnInit {

  form:FormGroup;
  agentes;
  editarAgente:Agente;
  modal:false;
  constructor(private accountService: AccountService,
              private router: Router) { }

  ngOnInit() {
    this.getData()
    this.form=new FormGroup({
      cedula: new FormControl('',Validators.required),
      nombre: new FormControl('',Validators.required),
      agente: new FormControl('',Validators.required)
    });
  }

  saveAgent(){
    if (this.form.valid) {
      this.accountService.createAgente(this.form.value).subscribe(res=>{
        this.agentes=res;
        this.getData();
        this.form.reset();
        alert('agregado con exito')
      })
    }
  }

  getData(){
    this.accountService.getDataAgente().subscribe(res=>{
      this.agentes=res
    })
  }

  editData(){
    this.accountService.getById(this.form.value).subscribe(res=>{
      console.log(res);
      this.agentes=res
    })
  }

  deleteData(id: string){
    this.accountService.delete(id).subscribe(res=>{
      this.getData();
    })
  }
 

}
