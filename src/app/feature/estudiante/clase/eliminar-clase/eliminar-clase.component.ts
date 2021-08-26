import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClaseService } from '@feature/estudiante/shared/service/clase/clase.service';

@Component({
  selector: 'app-eliminar-clase',
  templateUrl: './eliminar-clase.component.html',
  styleUrls: ['./eliminar-clase.component.css']
})
export class EliminarClaseComponent implements OnInit {

  @Input()
  idClase: number;
  @Output() seElimino: EventEmitter<boolean> = new EventEmitter();

  constructor(protected claseService: ClaseService) { }

  ngOnInit(): void {
  }

  eliminarClase(){
    this.claseService.eliminar(this.idClase).subscribe(() => this.seElimino.emit(true));

  }

}
