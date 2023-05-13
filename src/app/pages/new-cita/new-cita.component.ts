import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import {MedicoService} from 'src/app/services/medico.service';
import {HospitalService} from 'src/app/services/hospital.service';
import { Hospital } from 'src/app/models/hospital.model';
import { Medico } from 'src/app/models/medico.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CitaService } from 'src/app/services/cita.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-cita',
  templateUrl: './new-cita.component.html',
  styleUrls: ['./new-cita.component.css']
})
export class NewCitaComponent implements OnInit {
  hospitales:Hospital[] = [];
  medicos:Medico[] = [];
  public citaForm:FormGroup;
  constructor(public _usuarioService:UsuarioService,private router:Router,private _medicoService:MedicoService,private _hospitalService:HospitalService,private fb:FormBuilder,private _citaService:CitaService){}
  ngOnInit(): void {
    this._medicoService.cargarMedicos().subscribe(medicos => this.medicos = medicos);
    this._hospitalService.cargarHospitales().subscribe(hospitales => this.hospitales = hospitales);
    this.citaForm = this.fb.group({
      area:['',Validators.required],
      hospital:['',Validators.required],
      medico:['',Validators.required],
      fecha:[Date,Validators.required],
    })
  }

  guardarCita(){
      console.log(this.citaForm.value);
      this._citaService.crearCita(this.citaForm.value).subscribe((resp:any) => {
        console.log(resp);
        Swal.fire('Creado',`Cita creada`,'success');
        this.router.navigateByUrl(`/dashboard`);
      },err => console.log(err));
    }
  }
