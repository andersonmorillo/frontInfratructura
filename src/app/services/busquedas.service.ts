import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hospital } from '../models/hospital.model';
import { Medico } from '../models/medico.model';
import { Usuario } from '../models/usuario.model';
@Injectable({
  providedIn: 'root'
})
export class BusquedasService {
  public base_url = environment.base_url;

  constructor(private http:HttpClient) { }

  get token():string{
    return localStorage.getItem('token') || '';
  }

  get headers(){
    return {
      headers: {
        'x-token':this.token
      }
    }
  }

  private transformarUsuarios(resultados:any[]):Usuario[]{
    return resultados.map(
      user => new Usuario(user.nombre,user.email,'',user.img,user.google,user.role,user.uid)
    );
  }
  private transformarHospitales(resultados:any[]):Hospital[]{
    return resultados;
  }
  private transformarMedicos(resultados:any[]):Medico[]{
    return resultados;
  }


  buscar(tipo:'usuarios'|'medicos'|'hospitales',termino:string){
    return this.http.get(`${this.base_url}/todo/coleccion/${tipo}/${termino}`,this.headers)
    .pipe(
      map((resp:any) => {
        switch (tipo) {
          case 'usuarios':
            return this.transformarUsuarios(resp.data);
          case 'hospitales':
            return this.transformarHospitales(resp.data);
          case 'medicos':
            return this.transformarMedicos(resp.data);
          default:
            return [];
        }
      }
      ));
  }

  buscarGlobal(termino:string){
    return this.http.get(`${this.base_url}/todo/${termino}`,this.headers);
  }

}
