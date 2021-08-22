import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProfesorService } from "../../shared/service/profesor.service";
import { Profesor } from "../../shared/model/profesor";
import { TemaService } from "@feature/profesor/shared/service/tema/tema.service";
import { Tema } from "@feature/profesor/shared/model/tema/tema";
import { Observable } from "rxjs";
import { HorarioService } from "@feature/profesor/shared/service/horario/horario.service";
import { Horario } from "@feature/profesor/shared/model/horario/horario";


@Component({
  selector: "app-profesor-detail",
  templateUrl: "./profesor-detail.component.html",
  styleUrls: ["./profesor-detail.component.css"],
})
export class ProfesorDetailComponent implements OnInit {

  id: number;

  profesorActual: Profesor;

  temasProfesorActual: Observable<Tema[]>;
  horariosProfesorActual: Observable<Horario[]>

  constructor(
    private route: ActivatedRoute,
    protected productoService: ProfesorService,
    protected temaService: TemaService,
    protected horarioService: HorarioService) {
    this.id = +this.route.snapshot.params.id;
    //cargar el profesor
    this.productoService.consultarEspecifico(this.id).subscribe(profesor => this.profesorActual = profesor);
    this.temasProfesorActual = this.temaService.consultarEspecifico(this.id);
    this.horariosProfesorActual = this.horarioService.consultarEspecifico(this.id);
  }

  ngOnInit(): void {}
}
