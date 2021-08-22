import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  items : MenuItem[] = [
    {url: '/dashboard/profesor', nombre: 'Profesores'},
    {url: '/dashboard/estudiante', nombre: 'Estudiantes'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
