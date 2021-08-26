import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HorarioService } from '@feature/profesor/shared/service/horario/horario.service';
import { HorarioSalida } from '@feature/profesor/shared/model/horario/horario-salida';

@Component({
  selector: 'app-crear-horario',
  templateUrl: './crear-horario.component.html',
  styleUrls: ['./crear-horario.component.css'],
})
export class CrearHorarioComponent implements OnInit {
  @Input()
  id: number;

  @Output()
  seCreoHorario: EventEmitter<boolean> = new EventEmitter();

  horarioForm: FormGroup;
  constructor(protected horarioService: HorarioService) {}

  ngOnInit(): void {
    this.construirFormularioHorario();
  }

  guardarHorario() {
    const horarioGuardar: HorarioSalida = {
      idProfesor: this.id,
      diaSemana: this.horarioForm.get('diaSemana').value,
      hora: this.horarioForm.get('hora').value,
    };
    this.horarioService
      .guardar(horarioGuardar)
      .subscribe(() => this.seCreoHorario.emit(true));

    this.horarioForm.reset();
  }

  private construirFormularioHorario() {
    this.horarioForm = new FormGroup({
      diaSemana: new FormControl('', [Validators.required]),
      hora: new FormControl('', [Validators.required]),
    });
  }
}
