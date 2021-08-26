import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  }

  actualizarClase() {

    const claseActualizar: ClaseSalida = {
      idEstudiante: this.claseActualizar.estudianteDTO.id,
      idProfesor: this.formActualizarClase.get('profesorActualizar').value,
      fecha: formatDate(
        new Date(this.formActualizarClase.get('horaActualizar').value),
        'YYYY-MM-dd hh:mm:ss',
        'en-US'
      ),
    };
    this.claseService
      .actualizar(claseActualizar, this.claseActualizar.id)
      .subscribe(() => this.seActualizo.emit(true));
  }

  dia(): string {
    return formatDate(new Date(), 'YYYY-MM-ddThh:mm', 'en-US');
  }
}
