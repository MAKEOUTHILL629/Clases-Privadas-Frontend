import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  items : MenuItem[] = [
    {url: '/list-profesor', nombre: 'Profesor'},
    {url: '/detail', nombre: 'Lista Profesores'},
    {url: '/estudiante', nombre: 'Estudiante'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
