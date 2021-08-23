import { NgModule } from '@angular/core';


import { SharedModule } from '@shared/shared.module';
import { ProfesorDetailComponent } from './components/profesor-detail/profesor-detail.component';
import { ProfesorListComponent } from './components/profesor-list/profesor-list.component';
import { CrearHorarioComponent } from './horarios/components/crear-horario/crear-horario.component';
import { ProfesorRoutingModule } from './profesor-routing.module';
import { CrearTemaComponent } from './temas/components/crear-tema/crear-tema.component';





@NgModule({
  declarations: [
    ProfesorDetailComponent,
    ProfesorListComponent,
    CrearTemaComponent,
    CrearHorarioComponent
  ],
  imports: [
    SharedModule,
    ProfesorRoutingModule,

  ]
})
export class ProfesorModule { }
