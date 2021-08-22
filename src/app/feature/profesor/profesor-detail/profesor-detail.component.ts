import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProfesorService } from "../../../data/services/api/profesor.service";
import { Profesor } from "../../../data/interfaces/profesor.metada";
//import { Observable } from "rxjs";

@Component({
  selector: "app-profesor-detail",
  templateUrl: "./profesor-detail.component.html",
  styleUrls: ["./profesor-detail.component.css"],
})
export class ProfesorDetailComponent implements OnInit {

  id: number;

  profesorActual: Profesor;

  constructor(private route: ActivatedRoute, protected productoService: ProfesorService ) {
    this.id = +this.route.snapshot.params.id;
    //cargar el profesor
    this.productoService.consultarEspecifico(this.id).subscribe(profesor => this.profesorActual = profesor);
  }

  ngOnInit(): void {}
}
