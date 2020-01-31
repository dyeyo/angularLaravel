import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(private accountService: AccountService,
              private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    alert('Por favor espere, estamos procesando los datos')
    if(this.form.valid) {
      this.accountService.register(this.form.value).subscribe(r => {
        alert('Felicidades, su cuenta fue creada, por favor ingrese')
        this.router.navigateByUrl('login');
      });
    }
  }

}
