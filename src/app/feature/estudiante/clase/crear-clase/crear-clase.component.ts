
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fechaActualConFormato, formatoFecha } from '@core/modelo/manejo-fecha';
import { ClaseSalida } from '@feature/estudiante/shared/model/clase/clase-salida';
import { ClaseService } from '@feature/estudiante/shared/service/clase/clase.service';
import { Profesor } from '@feature/profesor/shared/model/profesor';
import { ProfesorService } from '@feature/profesor/shared/service/profesor.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-crear-clase',
  templateUrl: './crear-clase.component.html',
  styleUrls: ['./crear-clase.component.css'],
})
export class CrearClaseComponent implements OnInit {
  diaActual: string;
  formClase: FormGroup;
  profesores: Observable<Profesor[]>;

  idProfesor: number;

  @Input()
  idEstudiante: number;

  @Output()
  seCreo: EventEmitter<boolean> = new EventEmitter();

  constructor(
    protected profesorService: ProfesorService,

    protected claseService: ClaseService
  ) {
  }

  private construirFormularioClase() {
    this.formClase = new FormGroup({
      profesor: new FormControl('', [Validators.required]),
      horaCita: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.construirFormularioClase();
    this.profesores = this.profesorService.consultar();
    this.diaActual = fechaActualConFormato();
  }

  guardarClase() {
    const claseGuardar: ClaseSalida = {
      idEstudiante: this.idEstudiante,
      idProfesor: this.formClase.get('profesor').value,
      fecha: formatoFecha(this.formClase.get('horaCita').value)
    };

    this.claseService
      .guardar(claseGuardar)
      .subscribe(() => this.seCreo.emit(true), () => this.seCreo.emit(false));
    this.formClase.reset();
  }
}
