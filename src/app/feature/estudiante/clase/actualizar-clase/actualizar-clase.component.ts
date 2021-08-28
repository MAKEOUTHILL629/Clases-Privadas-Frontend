import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fechaActualConFormato, formatoFecha } from '@core/modelo/manejo-fecha';
import { ClaseCompleta } from '@feature/estudiante/shared/model/clase/clase-compuesta';
import { ClaseSalida } from '@feature/estudiante/shared/model/clase/clase-salida';
import { ClaseService } from '@feature/estudiante/shared/service/clase/clase.service';
import { Profesor } from '@feature/profesor/shared/model/profesor';
import { ProfesorService } from '@feature/profesor/shared/service/profesor.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-actualizar-clase',
  templateUrl: './actualizar-clase.component.html',
  styleUrls: ['./actualizar-clase.component.css'],
})
export class ActualizarClaseComponent implements OnInit {
  diaActual: string;

  formActualizarClase: FormGroup;
  @Input()
  claseActualizar: ClaseCompleta;

  profesores: Observable<Profesor[]>;

  @Output()
  seActualizo: EventEmitter<boolean> = new EventEmitter();

  constructor(
    protected claseService: ClaseService,
    protected profesorService: ProfesorService
  ) {
  }

  private construirFormularioClase() {
    this.formActualizarClase = new FormGroup({
      profesorActualizar: new FormControl('', [Validators.required]),
      horaActualizar: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.profesores = this.profesorService.consultar();
    this.construirFormularioClase();
    this.diaActual = fechaActualConFormato();
  }

  actualizarClase() {
    const claseActualizar: ClaseSalida = {
      idEstudiante: this.claseActualizar.estudianteDTO.id,
      idProfesor: this.formActualizarClase.get('profesorActualizar').value,
      fecha: formatoFecha(this.formActualizarClase.get('horaActualizar').value)
    };

    this.claseService
      .actualizar(claseActualizar, this.claseActualizar.id)
      .subscribe(() => {
        this.seActualizo.emit(true);
      }, () => {
        this.seActualizo.emit(false);
      });

    this.formActualizarClase.reset();
  }


}
