import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Agente } from '../interfaces/agente.interface';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-editar-agente',
  templateUrl: './editar-agente.component.html',
  styleUrls: ['./editar-agente.component.css']
})
export class EditarAgenteComponent implements OnInit {
  form:FormGroup;
  agente: Agente = {
		nombre:null,
		cedula:null,
		agente:null,
	}
  constructor(private accountService: AccountService) { 
      this.form=new FormGroup({
      cedula: new FormControl('',Validators.required),
      nombre: new FormControl('',Validators.required),
      agente: new FormControl('',Validators.required)
    });
   }

  ngOnInit() {
  }

  editUser(agente: Agente): void {
    this.accountService.getById(agente).subscribe(res=>{
      console.log(res)
    })
  };

  
}
