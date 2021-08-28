import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-notificacion',
  templateUrl: './mostrar-notificacion.component.html',
  styleUrls: ['./mostrar-notificacion.component.css']
})
export class MostrarNotificacionComponent implements OnInit {

  @Input()
  estado: string;

  @Input()
  mensaje: string;

  constructor() { }

  ngOnInit(): void {
  }

}
