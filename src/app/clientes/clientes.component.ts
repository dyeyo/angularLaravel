import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cliente } from '../interfaces/cliente.interface';
import { ClienteServiceService } from '../services/cliente-service.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  form:FormGroup;
  clietes;
  agentes;
  editarAgente:Cliente;

  get cedula() { return this.form.get('cedula'); }
  get nombre() { return this.form.get('nombre'); }
  get celular() { return this.form.get('celular'); }
  get direccion() { return this.form.get('direccion'); }
  get ciudad() { return this.form.get('ciudad'); }
  get id_agente() { return this.form.get('id_agente'); }

  constructor(private accountService: AccountService,
              private clienteService: ClienteServiceService,
              private router: Router) { }

  ngOnInit() {
    this.getData()
    this.getAgentes()
    this.form=new FormGroup({
      nombre: new FormControl(''),
      cedula: new FormControl(''),
      celular: new FormControl(''),
      direccion: new FormControl(''),
      ciudad: new FormControl(''),
      id_agente: new FormControl(''),
    });
    if(!this.accountService.isLogged()){
      this.router.navigateByUrl('login');
    }
  }

  saveClient(){
    if (this.form.valid) {
      this.clienteService.createCliente(this.form.value).subscribe(res=>{
        this.clietes=res
        this.getData();
        this.form.reset();
        alert('agregado con exito')
      })
    }
  }
 
  getAgentes(){
    this.accountService.getDataAgente().subscribe(res=>{
      this.agentes=res
    })
  }

  getData(){
    this.clienteService.getDataCliente().subscribe(res=>{
      this.clietes=res
    })
  }

  deleteData(id: number){
    this.clienteService.deleteCliente(id).subscribe(res=>{
      this.getData();
    })
  }

}
