import { Component, OnInit } from '@angular/core';
import { ProfesorService } from '../../../data/services/api/profesor.service';
import { Observable } from 'rxjs';
import { Profesor } from '../../../data/interfaces/profesor.metada';

@Component({
  selector: 'app-profesor-list',
  templateUrl: './profesor-list.component.html',
  styleUrls: ['./profesor-list.component.css']
})
export class ProfesorListComponent implements OnInit {


  public listarProfesores: Observable<Profesor[]>;
  constructor(protected productoService: ProfesorService) { }

  ngOnInit(): void {
    this.listarProfesores = this.productoService.consultar();
    console.log(this.listarProfesores)
  }

}
