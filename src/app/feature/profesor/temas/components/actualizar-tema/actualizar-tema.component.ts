import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TemaSalida } from '@feature/profesor/shared/model/tema/tema-salida';
import { TemaService } from '@feature/profesor/shared/service/tema/tema.service';


const LONGITUD_MINIMA_PERMITIDA_TEXTO = 5;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 30;

@Component({
  selector: 'app-actualizar-tema',
  templateUrl: './actualizar-tema.component.html',
  styleUrls: ['./actualizar-tema.component.css']
})
export class ActualizarTemaComponent implements OnInit {

  @Input()
  idTemaActualizar: number;

  @Input()
  idProfesor: number;

  formTemaActualizar: FormGroup;

  @Output() seActualizo: EventEmitter<boolean> = new EventEmitter();

  constructor(protected temaService: TemaService) { }

  ngOnInit(): void {
    this.construirFormularioTema();
  }

  private construirFormularioTema() {
    this.formTemaActualizar = new FormGroup({
      temaActualizarText: new FormControl('', [
        Validators.required,
        Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
        Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO),
      ]),
    });
  }

  actualizarTema(){

    const temaActualizar: TemaSalida = {
      idProfesor: this.idProfesor,
      tema: this.formTemaActualizar.get('temaActualizarText').value
    };

    console.log(temaActualizar);

    this.temaService.actualizar(temaActualizar, this.idTemaActualizar).subscribe(() => this.seActualizo.emit(true));
  }

}
