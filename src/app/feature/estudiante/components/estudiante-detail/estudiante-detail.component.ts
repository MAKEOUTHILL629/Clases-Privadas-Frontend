import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clase } from '@feature/estudiante/shared/model/clase/clase';
import { ClaseCompleta } from '@feature/estudiante/shared/model/clase/clase-compuesta';
import { Estudiante } from '@feature/estudiante/shared/model/estudiante';
import { ClaseService } from '@feature/estudiante/shared/service/clase/clase.service';
import { EstudianteService } from '@feature/estudiante/shared/service/estudiante.service';
import { Profesor } from '@feature/profesor/shared/model/profesor';
import { ProfesorService } from '@feature/profesor/shared/service/profesor.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-estudiante-detail',
  templateUrl: './estudiante-detail.component.html',
  styleUrls: ['./estudiante-detail.component.css']
})
export class EstudianteDetailComponent implements OnInit {

  id :number;

  estudianteActual: Estudiante;
  clasesEstudiante: Observable<Clase[]>;
  clasesEstudianteCompletas: ClaseCompleta[];

  constructor(
    private route: ActivatedRoute,
    protected estudianteService: EstudianteService,
    protected claseService: ClaseService,
    protected profesorServicio: ProfesorService
  ) {

    this.id = +this.route.snapshot.params.id;
    this.estudianteService.consultarEspecifico(this.id).subscribe(estudiante => this.estudianteActual = estudiante);
    this.clasesEstudiante = this.claseService.consultarEspecifico(this.id);
    this.clasesEstudiante.subscribe(data =>  {
      let conteo: number;

      for(let clase of data){
        this.clasesEstudianteCompletas[conteo]  = (this.construirArrayClases(clase));
        conteo++;
        console.log(this.clasesEstudianteCompletas + " asi vamos con el array")
      }
    });
  }


  construirArrayClases(clase: Clase){

    let profesorAux: Profesor ;
    let estudianteAux: Estudiante;


      console.log("entro a este ciclo")
      let claseCompleta : ClaseCompleta ={
        id: clase.id,
        profesor: profesorAux,
        estudiante: estudianteAux,
        fecha: clase.fecha,
        valor: clase.valor,
      }
      this.estudianteService.consultarEspecifico(clase.idEstudiante).subscribe(data => claseCompleta.estudiante = data);
      this.profesorServicio.consultarEspecifico(clase.idProfesor).subscribe(data =>   claseCompleta.profesor = data);


    console.log(claseCompleta)

    return claseCompleta;
  }



  ngOnInit(): void {


  }



}
