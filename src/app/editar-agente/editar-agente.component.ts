import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Agente } from '../interfaces/agente.interface';
import { AccountService } from '../services/account.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-agente',
  templateUrl: './editar-agente.component.html',
  styleUrls: ['./editar-agente.component.css']
})
export class EditarAgenteComponent implements OnInit {

  form: FormGroup;
  id: number;

  constructor(private accountService: AccountService, private route: ActivatedRoute, private router: Router) { 
      this.form=new FormGroup({
      cedula: new FormControl('',Validators.required),
      nombre: new FormControl('',Validators.required),
      agente: new FormControl('',Validators.required)
    });
   }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.editUser(this.id);

  }

  editUser(id: number): void {
    this.accountService.getById(id).subscribe((res: any)=>{
      this.form.get('cedula').setValue(res.agente.cedula);
      this.form.get('nombre').setValue(res.agente.nombre);
      this.form.get('agente').setValue(res.agente.agente);
    })
  };

  onUpdate() {
    if(this.form.valid) {
      this.accountService.editAgente(this.id, this.form.value).subscribe(r => {
        this.router.navigateByUrl('/agentes');
      });
    }
  }

  
}
