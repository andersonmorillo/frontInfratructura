import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  public user:Usuario;
  constructor(private usuarioService:UsuarioService,private router:Router) {
    this.user = usuarioService.user;
  }

  logout(){
    this.usuarioService.logout();
  }

  ngOnInit(): void {
  }

  buscar(termino:string){
    if(termino.length === 0){
      return;
    }
    this.router.navigateByUrl(`/dashboard/buscar/${termino}`);
  }

}
