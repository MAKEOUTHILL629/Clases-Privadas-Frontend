import { Component, OnInit } from '@angular/core';
import { Profesor } from '../../../data/interfaces/profesor.metada';

@Component({
  selector: 'app-profesor-list',
  templateUrl: './profesor-list.component.html',
  styleUrls: ['./profesor-list.component.css']
})
export class ProfesorListComponent implements OnInit {
  public profesores: Profesor[] = [
    {
      id: 1,
      nombres : "Prueba 1",
      apellidos : "Prueba 1",
      profesion : "Programador 1",
    },
    {
      id: 2,
      nombres : "Prueba 2",
      apellidos : "Prueba 2",
      profesion : "Programador 2",
    },
    {
      id: 3,
      nombres : "Prueba 3",
      apellidos : "Prueba 3",
      profesion : "Programador 3",
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
