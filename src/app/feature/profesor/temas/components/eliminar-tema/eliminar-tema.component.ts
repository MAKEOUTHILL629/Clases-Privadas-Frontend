import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TemaService } from '@feature/profesor/shared/service/tema/tema.service';

@Component({
  selector: 'app-eliminar-tema',
  templateUrl: './eliminar-tema.component.html',
  styleUrls: ['./eliminar-tema.component.css']
})
export class EliminarTemaComponent implements OnInit {
  @Input()
  idTemaEliminar: number;

  @Output() seElimino: EventEmitter<boolean> = new EventEmitter();

  constructor(protected temaService: TemaService) { }

  ngOnInit(): void {
  }

  eliminarTema() {
    this.temaService.eliminar(this.idTemaEliminar).subscribe(() => this.seElimino.emit(true), () => this.seElimino.emit(false));
  }
}
