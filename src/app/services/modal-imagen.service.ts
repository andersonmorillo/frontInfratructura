import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class ModalImagenService {
  private _ocultarModal:boolean = true;
  public id:string;
  public img:string;
  public tipo:'usuarios'|'medicos'|'hospitales';
  public nuevaImagen:EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  get ocultarModal(){
    return this._ocultarModal;
  }

  mostrarModal(tipo: 'usuarios'|'medicos'|'hospitales',id:string,img:string='no-img'){
    this._ocultarModal = false;
    this.id = id;
    this.tipo = tipo;
    if(img.includes('https')){
      this.img = img;
    }else{
      this.img = `${base_url}/uploads/${tipo}/${img}`;
    }
  }
  cerrarModal(){
    this._ocultarModal = true;
  }
}
