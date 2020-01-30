import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AgenteComponent } from './agente/agente.component';
import { EditarAgenteComponent } from './editar-agente/editar-agente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';


const routes: Routes = [
    {  path:'',component:HomeComponent},
    {  path:'inicio',component:ClientesComponent},
    {  path:'login',component:LoginComponent},
    {  path:'register',component:RegisterComponent},
    
    {  path:'agentes',component:AgenteComponent},
    {  path:'editar_agente/:id',component:EditarAgenteComponent},
    {  path:'clientes',component:ClientesComponent},
    {  path:'editar_clientes/:id',component:EditarClienteComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
