import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { SidebarService } from 'src/app/services/sidebar.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {
  public user:Usuario;
  public menu:any;
  constructor(public _sidebarService:SidebarService,private usuarioService:UsuarioService) {
    this.user = usuarioService.user;
  }
  ngOnInit(): void {
  }
}
