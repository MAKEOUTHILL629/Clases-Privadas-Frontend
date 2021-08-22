import { Component, OnInit } from '@angular/core';
import { ProfesorService } from '../../shared/service/profesor.service';
import { Observable } from 'rxjs';
import { Profesor } from '../../shared/model/profesor';

@Component({
  selector: 'app-profesor-list',
  templateUrl: './profesor-list.component.html',
  styleUrls: ['./profesor-list.component.css']
})
export class ProfesorListComponent implements OnInit {


  public listarProfesores: Observable<Profesor[]>;
  constructor(protected profesorService: ProfesorService) { }

  ngOnInit(): void {
    this.listarProfesores = this.profesorService.consultar();
  }

}
