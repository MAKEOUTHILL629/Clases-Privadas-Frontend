import { Component, Input, OnInit } from '@angular/core';
import { TemaService } from '@feature/profesor/shared/service/tema/tema.service';

@Component({
  selector: 'app-eliminar-tema',
  templateUrl: './eliminar-tema.component.html',
  styleUrls: ['./eliminar-tema.component.css']
})
export class EliminarTemaComponent implements OnInit {
  @Input()
  idTemaEliminar: number;

  constructor(protected temaService: TemaService) { }

  ngOnInit(): void {
  }

}
