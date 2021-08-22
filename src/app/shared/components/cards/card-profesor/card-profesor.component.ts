import { Component, Input, OnInit } from '@angular/core';
import { Profesor } from '@feature/profesor/shared/model/profesor';

@Component({
  selector: 'app-card-profesor',
  templateUrl: './card-profesor.component.html',
  styleUrls: ['./card-profesor.component.css']
})
export class CardProfesorComponent implements OnInit {
  @Input()
  profesorData: Profesor;

  constructor() { }

  ngOnInit(): void {
  }

}
