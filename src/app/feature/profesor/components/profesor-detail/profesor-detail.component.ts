import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfesorService } from '../../shared/service/profesor.service';
import { Profesor } from '../../shared/model/profesor';
import { TemaService } from '@feature/profesor/shared/service/tema/tema.service';
import { Tema } from '@feature/profesor/shared/model/tema/tema';
import { Observable } from 'rxjs';
import { HorarioService } from '@feature/profesor/shared/service/horario/horario.service';
import { Horario } from '@feature/profesor/shared/model/horario/horario';

@Component({
  selector: 'app-profesor-detail',
  templateUrl: './profesor-detail.component.html',
  styleUrls: ['./profesor-detail.component.css'],
})
export class ProfesorDetailComponent implements OnInit {
  id: number;
  profesorActual: Profesor;
  temasProfesorActual: Observable<Tema[]>;
  horariosProfesorActual: Observable<Horario[]>;
  estado: string;
  mensaje: string;
  constructor(
    private route: ActivatedRoute,
    protected profesorService: ProfesorService,
    protected temaService: TemaService,
    protected horarioService: HorarioService
  ) {
    this.id = +this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.profesorService
      .consultarEspecifico(this.id)
      .subscribe(
        (profesor: Profesor) => (this.profesorActual = profesor)
      );

    this.cargarHorarios();
    this.cargarTemas();
  }

  cargarTemas(estado?: boolean, mensaje?: string): void{
    if (estado){
      this.estado = 'bien';
      this.mensaje =  mensaje + ' el tema funciono correctamente';
      this.temasProfesorActual = this.temaService.consultarEspecifico(this.id);
    }else if (estado === false){
      this.estado = 'error';
      this.mensaje = 'Ocurrio un error, al momento de ' + mensaje + ' el tema, intente nuevamente';
    }else{

      this.temasProfesorActual = this.temaService.consultarEspecifico(this.id);

    }

    setTimeout(() => this.estado = ' ', 10000 );
  }

  cargarHorarios(estado?: boolean, mensaje?: string): void{
    if (estado){
      this.estado = 'bien';
      this.mensaje =  mensaje + ' el horario funciono correctamente';
      this.horariosProfesorActual = this.horarioService.consultarEspecifico(this.id);
    }else if (estado === false){
      this.estado = 'error';
      this.mensaje = 'Ocurrio un error, al momento de ' + mensaje + ' el horario, intente nuevamente';
    }else{
      this.horariosProfesorActual = this.horarioService.consultarEspecifico(this.id);
    }

    setTimeout(() => this.estado = ' ', 10000 );
  }

}
