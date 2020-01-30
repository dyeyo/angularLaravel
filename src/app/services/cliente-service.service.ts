import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cliente } from '../interfaces/cliente.interface';
@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  constructor(private http: HttpClient) {  }

  getDataCliente(){
    return this.http.get(environment.api + '/clientes');
  }

  getDataAgentesCliente(){
    return this.http.get(environment.api + '/getAgentes');
  }

  createCliente(cliente: Cliente){
    return this.http.post(environment.api + '/create_cliente', cliente);
  }

  getByIdCliente(id){
			return this.http.get(environment.api + '/cliente/'+id);
  }
  
  editCliente(id: number,cliente: Cliente){
		return this.http.put(environment.api +  `/update_cliente/${id}`, cliente);
  }
  
	deleteCliente(id: number){
		return this.http.delete(environment.api + '/delete_cliente/' + id);
	}
}
