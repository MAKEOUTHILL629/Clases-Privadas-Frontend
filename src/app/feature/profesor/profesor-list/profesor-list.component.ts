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
      nombres : "Luis Felipe",
      apellidos : "Hernandez Chica",
      profesion : "Programador",
    },
    {
      nombres : "Luis Felipe2",
      apellidos : "Hernandez Chica2",
      profesion : "Programador2",
    },
    {
      nombres : "Luis Felipe3",
      apellidos : "Hernandez Chica3",
      profesion : "Programador3",
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
