import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ClaseCompleta } from '@feature/estudiante/shared/model/clase/clase-compuesta';
import { Estudiante } from '@feature/estudiante/shared/model/estudiante';
import { ClaseService } from '@feature/estudiante/shared/service/clase/clase.service';
import { EstudianteService } from '@feature/estudiante/shared/service/estudiante.service';

import { ProfesorService } from '@feature/profesor/shared/service/profesor.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-estudiante-detail',
  templateUrl: './estudiante-detail.component.html',
  styleUrls: ['./estudiante-detail.component.css'],
})
export class EstudianteDetailComponent implements OnInit {
  id: number;
  estudianteActual: Estudiante;
  clasesEstudiante: Observable<ClaseCompleta[]>;
  estado: string;
  mensaje: string;
  constructor(
    private route: ActivatedRoute,
    protected estudianteService: EstudianteService,
    protected claseService: ClaseService,
    protected profesorServicio: ProfesorService
  ) {
    this.id = +this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.estudianteService
      .consultarEspecifico(this.id)
      .subscribe((estudiante) => (this.estudianteActual = estudiante));

    this.clasesEstudiante = this.claseService.consultarEspecifico(this.id);
  }

  cargarClases(estado?: boolean, mensaje?: string): void{
    if (estado){
      this.estado = 'bien';
      this.mensaje =  mensaje + ' la clase funciono correctamente';
      this.clasesEstudiante = this.claseService.consultarEspecifico(this.id);
    }else if (estado === false){
      this.estado = 'error';
      this.mensaje = 'Ocurrio un error, al momento de ' + mensaje + ' la clase, intente nuevamente';
    }else{
      this.clasesEstudiante = this.claseService.consultarEspecifico(this.id);
    }

    setTimeout(() => this.estado = ' ', 10000 );
  }
}
