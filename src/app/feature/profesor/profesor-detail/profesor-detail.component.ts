import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Profesor } from "../../../data/interfaces/profesor.metada";

@Component({
  selector: "app-profesor-detail",
  templateUrl: "./profesor-detail.component.html",
  styleUrls: ["./profesor-detail.component.css"],
})
export class ProfesorDetailComponent implements OnInit {
  id: number;
  profesorActual: Profesor;
  constructor(private route: ActivatedRoute) {
    this.id = +this.route.snapshot.params.id;
    //cargar el profesor
  }

  ngOnInit(): void {}
}
