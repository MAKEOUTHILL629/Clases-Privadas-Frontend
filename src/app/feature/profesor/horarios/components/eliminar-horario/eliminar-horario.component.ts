import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HorarioService } from '@feature/profesor/shared/service/horario/horario.service';

@Component({
  selector: 'app-eliminar-horario',
  templateUrl: './eliminar-horario.component.html',
  styleUrls: ['./eliminar-horario.component.css']
})
export class EliminarHorarioComponent implements OnInit {

  @Input()
  idHorario: number;

  @Output()
  seElimino: EventEmitter<boolean> = new EventEmitter();
  constructor(protected horarioService: HorarioService) { }

  ngOnInit(): void {
  }

  eliminarHoriario(){
    this.horarioService.eliminar(this.idHorario).subscribe(() => this.seElimino.emit(true));
  }

}
