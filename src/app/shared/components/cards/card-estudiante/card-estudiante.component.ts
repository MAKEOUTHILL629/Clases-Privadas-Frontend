import { Component, Input, OnInit } from '@angular/core';
import { Estudiante } from '@feature/estudiante/shared/model/estudiante';

@Component({
  selector: 'app-card-estudiante',
  templateUrl: './card-estudiante.component.html',
  styleUrls: ['./card-estudiante.component.css']
})
export class CardEstudianteComponent implements OnInit {
  @Input()
  estudianteData: Estudiante;
  constructor() { }

  ngOnInit(): void {
  }

}
