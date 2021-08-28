import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HorarioSalida } from '@feature/profesor/shared/model/horario/horario-salida';
import { HorarioService } from '@feature/profesor/shared/service/horario/horario.service';

@Component({
  selector: 'app-actualizar-horario',
  templateUrl: './actualizar-horario.component.html',
  styleUrls: ['./actualizar-horario.component.css']
})
export class ActualizarHorarioComponent implements OnInit {
  @Input()
  idHorario: number;

  @Input()
  idProfesor: number;

  formHorarioActualizar: FormGroup;

  @Output()
  seActualizo: EventEmitter<boolean> = new EventEmitter();

  constructor(protected horarioService: HorarioService) { }

  ngOnInit(): void {
    this.construirFormularioHorario();
  }

  private construirFormularioHorario() {
    this.formHorarioActualizar = new FormGroup({
      diaSemanaActualizar: new FormControl('', [Validators.required]),
      horaActualizar: new FormControl('', [Validators.required]),
    });
  }


  actualizarHorario() {
    const horario: HorarioSalida = {
      idProfesor: this.idProfesor,
      hora: this.formHorarioActualizar.get('horaActualizar').value,
      diaSemana: this.formHorarioActualizar.get('diaSemanaActualizar').value
    };

    this.horarioService.actualizar(horario, this.idHorario).subscribe(() => this.seActualizo.emit(true));
  }
}
