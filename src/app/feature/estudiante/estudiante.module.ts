import { NgModule } from '@angular/core';

import { EstudianteRoutingModule } from './estudiante-routing.module';
import { EstudianteListComponent } from './components/estudiante-list/estudiante-list.component';
import { EstudianteDetailComponent } from './components/estudiante-detail/estudiante-detail.component';
import { SharedModule } from '@shared/shared.module';
import { CrearClaseComponent } from './clase/crear-clase/crear-clase.component';
import { ActualizarClaseComponent } from './clase/actualizar-clase/actualizar-clase.component';
import { EliminarClaseComponent } from './clase/eliminar-clase/eliminar-clase.component';


@NgModule({
  declarations: [
    EstudianteListComponent,
    EstudianteDetailComponent,
    CrearClaseComponent,
    ActualizarClaseComponent,
    EliminarClaseComponent
  ],
  imports: [
    SharedModule,
    EstudianteRoutingModule
  ]
})
export class EstudianteModule { }
