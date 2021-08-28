import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { Estudiante } from '@feature/estudiante/shared/model/estudiante';
import { NivelEstudios } from '@feature/estudiante/shared/model/nivel-estudios.enum';
import { EstudianteService } from '@feature/estudiante/shared/service/estudiante.service';
import { of } from 'rxjs';

import { EstudianteListComponent } from './estudiante-list.component';

describe('EstudianteListComponent', () => {
  let component: EstudianteListComponent;
  let fixture: ComponentFixture<EstudianteListComponent>;
  let estudianteService: EstudianteService;
  const listaDeEstudiante: Estudiante[] = [
    {
      id: 1,
      persona: {
        id: 2,
        nombres: 'prueba',
        apellidos: 'apellidos',
        cedula: '1231232',
      },
      nivelEstudios: NivelEstudios.SECUNDARIA,
    },
    {
      id: 2,
      persona: {
        id: 3,
        nombres: 'prueba 2',
        apellidos: 'apellidos 2',
        cedula: '12312322',
      },
      nivelEstudios: NivelEstudios.PRIMARIA,
    },
  ];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EstudianteListComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [EstudianteService, HttpService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudianteListComponent);
    component = fixture.componentInstance;
    estudianteService = TestBed.inject(EstudianteService);
    spyOn(estudianteService, 'consultar').and.returnValue(
      of(listaDeEstudiante)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia retornar la lista de usuarios', () => {
    component.ngOnInit();
    component.listaEstudiantes.subscribe(resultado => {
     expect(listaDeEstudiante).toBe(resultado);
    });
  });

});
