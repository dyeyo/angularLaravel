import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user.interfaces';
import { environment } from 'src/environments/environment';
import { Agente } from '../interfaces/agente.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) {  }

  register(user: User) {
    return this.http.post(environment.api + '/register', user);
  }

  login(user: User) {
    return this.http.post(environment.api + '/login', user);
  }

  isLogged(){
    return Boolean(localStorage.getItem('token'));
  }

  getDataAgente(){
    return this.http.get(environment.api + '/agentes');
  }

  createAgente(agente: Agente){
    return this.http.post(environment.api + '/create_agente', agente);
  }

  getById(id){
		if(id){
			return this.http.get(environment.api + '/agente/'+id);
		}
	}
  put(agente: Agente){
		const headers = new HttpHeaders({'Content-Type':'application/json'});
		return this.http.put(environment.api + '/update_agente/' + agente, {headers: headers});
	}
	delete(id){
		return this.http.delete(environment.api + '/delete_agente/' + id);
	}

}
