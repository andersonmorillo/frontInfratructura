import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';
import { HospitalesComponent } from './mantenimientos/hospitales/hospitales.component';
import { MedicosComponent } from './mantenimientos/medicos/medicos.component';
import { MedicoComponent } from './mantenimientos/medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../guards/admin.guard';
import { CitasComponent } from './citas/citas.component';
import { NewCitaComponent } from './new-cita/new-cita.component';

const childRoutes:Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: { titulo: 'Dashboard' },
  },
  {
    path: 'citas',
    component: CitasComponent,
    data: { titulo: 'Citas' },
  },
  {
    path: 'new-cita',
    component: NewCitaComponent,
    data: { titulo: 'Nueva cita' },
  },
  {
    path: 'grafica1',
    component: Grafica1Component,
    data: { titulo: 'Gráficas' },
  },
  {
    path: 'account-settings',
    component: AccountSettingsComponent,
    data: { titulo: 'Account settings' },
  },
  { path: 'perfil', component: PerfilComponent, data: { titulo: 'Perfil' } },
  { path: 'buscar/:termino', component: BusquedaComponent, data: { titulo: 'Busqueda' } },

  //Mantenimientos
  { path: 'hospitales', component: HospitalesComponent, data: { titulo: 'Mantenimiento de hospitales' } },
  { path: 'medicos', component: MedicosComponent, data: { titulo: 'Mantenimiento de medicos' } },
  { path: 'medico/:id', component: MedicoComponent, data: { titulo: 'Mantenimiento de medicos' } },

  //Rutas de admin
  { path: 'usuarios',canActivate:[AdminGuard], component: UsuariosComponent, data: { titulo: 'Mantenimiento de usuarios' } },
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ChildRoutesModule { }
