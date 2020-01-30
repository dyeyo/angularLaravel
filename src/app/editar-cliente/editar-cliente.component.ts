import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { ClienteServiceService } from '../services/cliente-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Agente } from '../interfaces/agente.interface';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  form: FormGroup;
  id: number;
  agentes:Agente;
  constructor(private clientService: ClienteServiceService,
              private accountService: AccountService,
            private route: ActivatedRoute, 
            private router: Router) { 
      this.form=new FormGroup({
        nombre: new FormControl('',Validators.required),
        cedula: new FormControl('',Validators.required),
        celular: new FormControl('',Validators.required),
        direccion: new FormControl('',Validators.required),
        ciudad: new FormControl('',Validators.required),
        id_agente: new FormControl('',Validators.required)
      });
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.editClient(this.id);
    this.getAgentes();
  }

  editClient(id: number):void{
    this.clientService.getByIdCliente(id).subscribe((res: any)=>{
      this.form.get('nombre').setValue(res.cliente.nombre);
      this.form.get('cedula').setValue(res.cliente.cedula);
      this.form.get('celular').setValue(res.cliente.celular);
      this.form.get('direccion').setValue(res.cliente.direccion);
      this.form.get('ciudad').setValue(res.cliente.ciudad);
      this.form.get('id_agente').setValue(res.cliente.id_agente);
    })
  }

  getAgentes(){
    this.accountService.getDataAgente().subscribe(res=>{
      this.agentes=res
    })
  }


  onUpdate() {
    if(this.form.valid) {
      this.clientService.editCliente(this.id, this.form.value).subscribe(res => {
        alert('Editado con exito')
        this.router.navigateByUrl('/clientes');
      });
    }
  }
}
