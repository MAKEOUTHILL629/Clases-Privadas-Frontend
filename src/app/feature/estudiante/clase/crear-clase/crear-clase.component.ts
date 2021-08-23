import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClaseService } from '@feature/estudiante/shared/service/clase/clase.service';
import { Horario } from '@feature/profesor/shared/model/horario/horario';
import { Profesor } from '@feature/profesor/shared/model/profesor';
import { HorarioService } from '@feature/profesor/shared/service/horario/horario.service';
import { ProfesorService } from '@feature/profesor/shared/service/profesor.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-crear-clase',
  templateUrl: './crear-clase.component.html',
  styleUrls: ['./crear-clase.component.css']
})
export class CrearClaseComponent implements OnInit {
  formClase: FormGroup;
  profesores: Observable<Profesor[]>
  horariosProfesor: Observable<Horario[]>
  idProfesor: number= 1;
  constructor(
    protected profesorService: ProfesorService,
    protected horarioService: HorarioService,
    protected claseService: ClaseService,
  ) {

    this.profesores = this.profesorService.consultar();



    of()
  }



  private construirFormularioClase() {
    this.formClase =  new FormGroup({
      profesor: new FormControl('', [Validators.required]),
      horarioProfesor: new FormControl('', [Validators.required])
    });

   }



  ngOnInit(): void {
    this.construirFormularioClase();
  }



  guardarClase(){

  }

}
