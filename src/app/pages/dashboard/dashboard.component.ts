import { Component, OnInit } from '@angular/core';
import { Subscription, map } from 'rxjs';
import { Hospital } from 'src/app/models/hospital.model';
import { HospitalService } from 'src/app/services/hospital.service';
import { SidebarService } from 'src/app/services/sidebar.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {
  menu:any = []
  imagenes:any[] = [];
  role = "";
  constructor(public _userService:UsuarioService,public _sidebarService:SidebarService,private _hospitalService:HospitalService,public _usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.role = this._userService.user.role == "USER_ROLE" ? "Paciente" : "Medico"
    this.menu = this._sidebarService.menu;
    this.menu = this.menu[0].submenu;
    this._hospitalService.cargarHospitales().subscribe((resp:any) => {
      this.imagenes = resp.map(hospital => hospital.img);
    });
  }
}
