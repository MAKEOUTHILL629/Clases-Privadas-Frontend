import { formatDate } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ClaseSalida } from "@feature/estudiante/shared/model/clase/clase-salida";
import { ClaseService } from "@feature/estudiante/shared/service/clase/clase.service";
import { Horario } from "@feature/profesor/shared/model/horario/horario";
import { Profesor } from "@feature/profesor/shared/model/profesor";
import { HorarioService } from "@feature/profesor/shared/service/horario/horario.service";
import { ProfesorService } from "@feature/profesor/shared/service/profesor.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-crear-clase",
  templateUrl: "./crear-clase.component.html",
  styleUrls: ["./crear-clase.component.css"],
})
export class CrearClaseComponent implements OnInit {
  formClase: FormGroup;
  profesores: Observable<Profesor[]>;
  horariosProfesor: Observable<Horario[]>;
  idProfesor: number = 1;
  @Input()
  idEstudiante: number;
  constructor(
    protected profesorService: ProfesorService,
    protected horarioService: HorarioService,
    protected claseService: ClaseService
  ) {
    this.horariosProfesor = this.horarioService.consultarEspecifico(
      this.idProfesor
    );
    this.profesores = this.profesorService.consultar();
  }

  private construirFormularioClase() {
    this.formClase = new FormGroup({
      profesor: new FormControl("", [Validators.required]),
      horaCita: new FormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.construirFormularioClase();
  }

  onSelect(id: number) {
    this.idProfesor = id;
    this.horariosProfesor = this.horarioService.consultarEspecifico(
      this.idProfesor
    );
  }

  guardarClase() {
    let claseGuardar: ClaseSalida = {
      idEstudiante: this.idEstudiante,
      idProfesor: this.idProfesor,
      fecha: formatDate(
        new Date(this.formClase.get("horaCita").value),
        "YYYY-MM-dd hh:mm:ss",
        "en-US"
      ),
    };


    this.claseService
      .guardar(claseGuardar)
      .subscribe((data) => console.log(data));
  }

  dia() {
    return formatDate(new Date(), "YYYY-MM-ddThh:mm", "en-US");
  }
}
