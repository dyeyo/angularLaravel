import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';

import { JwtModule } from "@auth0/angular-jwt";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AgenteComponent } from './agente/agente.component';
import { EditarAgenteComponent } from './editar-agente/editar-agente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ClientesComponent,
    AgenteComponent,
    EditarAgenteComponent,
    EditarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["example.com"],
        blacklistedRoutes: ["example.com/examplebadroute/"]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
