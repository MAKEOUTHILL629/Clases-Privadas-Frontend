import { NgModule } from '@angular/core';


import { SharedModule } from '@shared/shared.module';
import { ProfesorDetailComponent } from './components/profesor-detail/profesor-detail.component';
import { ProfesorListComponent } from './components/profesor-list/profesor-list.component';
import { CrearHorarioComponent } from './horarios/components/crear-horario/crear-horario.component';
import { ProfesorRoutingModule } from './profesor-routing.module';
import { HorarioService } from './shared/service/horario/horario.service';
import { ProfesorService } from './shared/service/profesor.service';
import { TemaService } from './shared/service/tema/tema.service';
import { CrearTemaComponent } from './temas/components/crear-tema/crear-tema.component';
import { EliminarTemaComponent } from './temas/components/eliminar-tema/eliminar-tema.component';
import { ActualizarTemaComponent } from './temas/components/actualizar-tema/actualizar-tema.component';
import { EliminarHorarioComponent } from './horarios/components/eliminar-horario/eliminar-horario.component';
import { ActualizarHorarioComponent } from './horarios/components/actualizar-horario/actualizar-horario.component';





@NgModule({
  declarations: [
    ProfesorDetailComponent,
    ProfesorListComponent,
    CrearTemaComponent,
    CrearHorarioComponent,
    EliminarTemaComponent,
    ActualizarTemaComponent,
    EliminarHorarioComponent,
    ActualizarHorarioComponent
  ],
  imports: [
    SharedModule,
    ProfesorRoutingModule,
  ],
  providers: [ProfesorService, TemaService, HorarioService]
})
export class ProfesorModule { }
