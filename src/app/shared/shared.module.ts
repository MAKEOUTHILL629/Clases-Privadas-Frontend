import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MensajeErrorCamposDirective } from './directivas/error-campos/directiva/mensaje-error-campos.directive';
import { MensajeErrorCamposSubmitDirective } from './directivas/error-campos/directiva/mensaje-error-campos-submit.directive';
import { MensajeErrorCamposContenedorDirective } from './directivas/error-campos/directiva/mensaje-error-campos-contenedor.directive';
import { ErrorCamposPlantillaComponent } from './directivas/error-campos/componente/error-campos-plantilla.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TrackByPipe } from './pipe/track-by.pipe';
import { CardProfesorComponent } from './components/cards/card-profesor/card-profesor.component';
import { RouterModule } from '@angular/router';
import { CardEstudianteComponent } from './components/cards/card-estudiante/card-estudiante.component';
import { MostrarNotificacionComponent } from './components/notificaciones/mostrar-notificacion/mostrar-notificacion.component';

@NgModule({
  declarations: [
    ErrorCamposPlantillaComponent,
    MensajeErrorCamposDirective,
    MensajeErrorCamposContenedorDirective,
    MensajeErrorCamposSubmitDirective,
    TrackByPipe,
    CardProfesorComponent,
    CardEstudianteComponent,
    MostrarNotificacionComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    MensajeErrorCamposDirective,
    MensajeErrorCamposContenedorDirective,
    MensajeErrorCamposSubmitDirective,
    ReactiveFormsModule,
    FormsModule,
    TrackByPipe,
    CardProfesorComponent,
    CardEstudianteComponent,
    MostrarNotificacionComponent
  ],
})
export class SharedModule {}
