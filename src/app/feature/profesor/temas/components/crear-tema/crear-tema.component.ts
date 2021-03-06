import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TemaService } from '@feature/profesor/shared/service/tema/tema.service';
import { TemaSalida } from '@feature/profesor/shared/model/tema/tema-salida';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 5;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 30;

@Component({
  selector: 'app-crear-tema',
  templateUrl: './crear-tema.component.html',
  styleUrls: ['./crear-tema.component.css'],
})
export class CrearTemaComponent implements OnInit {
  @Input()
  id: number;

  temaForm: FormGroup;

  @Output()
  seCreoTema: EventEmitter<boolean> = new EventEmitter();

  constructor(protected temaService: TemaService) { }

  ngOnInit(): void {
    this.construirFormularioTema();
  }

  private construirFormularioTema() {
    this.temaForm = new FormGroup({
      tema: new FormControl('', [
        Validators.required,
        Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
        Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO),
      ]),
    });
  }

  guardarTema() {
    const temaSalida: TemaSalida = {
      idProfesor: this.id,
      tema: this.temaForm.get('tema').value,
    };
    this.temaService
      .guardar(temaSalida)
      .subscribe(() => this.seCreoTema.emit(true), () => this.seCreoTema.emit(false));

    this.temaForm.reset();
  }


}
