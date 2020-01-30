import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private accountService: AccountService, private router: Router) {}

  form: FormGroup;
  
  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

    /* Instanciar servicio de accountService */
  login() {
    this.accountService.login(this.form.value).subscribe((r: any) => {
      localStorage.setItem('token', r.success.token);
      this.router.navigateByUrl('agentes');
    });
  }
}
