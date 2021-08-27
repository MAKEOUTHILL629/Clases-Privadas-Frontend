import { Component, OnInit } from '@angular/core';
import { Estudiante } from '@feature/estudiante/shared/model/estudiante';
import { EstudianteService } from '@feature/estudiante/shared/service/estudiante.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-estudiante-list',
  templateUrl: './estudiante-list.component.html',
  styleUrls: ['./estudiante-list.component.css']
})
export class EstudianteListComponent implements OnInit {

  public listaEstudiantes: Observable<Estudiante[]>;

  constructor(protected estudianteService: EstudianteService) { }

  ngOnInit(): void {
    this.listaEstudiantes = this.estudianteService.consultar();
  }

}
