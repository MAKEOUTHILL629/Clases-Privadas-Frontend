import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpService } from "@core/services/http.service";
import { Profesor } from "@feature/profesor/shared/model/profesor";
import { ProfesorService } from "@feature/profesor/shared/service/profesor.service";
import { of } from "rxjs";

import { ProfesorListComponent } from "./profesor-list.component";

describe("ProfesorListComponent", () => {
  let component: ProfesorListComponent;
  let fixture: ComponentFixture<ProfesorListComponent>;
  let profesorService: ProfesorService;
  const listaProfesores: Profesor[] = [
    {
      id: 1,
      persona: {
        id: 3,
        nombres: "Prueba",
        apellidos: "Prueba",
        cedula: "12321321",
      },
      profesion: "Cardiologo",
    },
    {
      id: 2,
      persona: {
        id: 4,
        nombres: "Prueba 2",
        apellidos: "Prueba 2",
        cedula: "12321312",
      },
      profesion: "Programador",
    },
  ];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProfesorListComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [ProfesorService, HttpService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorListComponent);
    component = fixture.componentInstance;
    profesorService = TestBed.inject(ProfesorService);
    spyOn(profesorService, 'consultar').and.returnValue(
      of(listaProfesores)
    );
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
    component.listarProfesores.subscribe(resultado => {
      expect(2).toBe(resultado.length);
    })
  });
});
