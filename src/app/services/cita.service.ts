import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  constructor(private http:HttpClient) { }

  get token():string{
    return localStorage.getItem('token') || '';
  }

  get headers(){
    return {
      headers: {
        'x-token': this.token
      }
    }
  }

  crearCita(cita: {area:string,fecha:Date,user:string,hospital:string,medico:string}){
    return this.http.post(`${base_url}/citas`,cita,this.headers);
  }

  cargarCitas(id:string){
    return this.http.get(`${base_url}/citas/${id}`,this.headers);
  }

  borrarCita(id:string){
    return this.http.delete(`${base_url}/citas/${id}`,this.headers);
  }
}
