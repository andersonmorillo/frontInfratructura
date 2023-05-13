import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CitaService } from 'src/app/services/cita.service';
import { HospitalService } from 'src/app/services/hospital.service';
import { MedicoService } from 'src/app/services/medico.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css'],
})
export class CitasComponent implements OnInit {
  citas = [];
  medico: any[] = [];
  hospital: any[] = [];
  cargando = true;
  constructor(
    private _citaService: CitaService,
    private _medicoService: MedicoService,
    private _hospitalService: HospitalService,
    public _usuarioService:UsuarioService,
    private router:Router,
  ) {}
  ngOnInit(): void {
    this._citaService.cargarCitas(this._usuarioService.user.uid).subscribe((citas: any) => {
      this.cargando = false;
      this.citas = citas.citas.citas;
      this.citas.forEach((cita) => {
        this._medicoService
          .getMedicoById(cita.medico)
          .subscribe((resp) => this.medico.push(resp.nombre));
        this._hospitalService
          .hospitalById(cita.hospital)
          .subscribe((resp: any) => this.hospital.push(resp.hospital.nombre));
      });
    });
  }

  cancelarCita(id:string){
    this._citaService.borrarCita(id).subscribe(() => {
      Swal.fire('Cancelada',`Cita cancelada`,'success');
        this.router.navigateByUrl(`/dashboard`);
    })
  }
}
