import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { ClaseCompleta } from '@feature/estudiante/shared/model/clase/clase-compuesta';
import { NivelEstudios } from '@feature/estudiante/shared/model/nivel-estudios.enum';
import { ClaseService } from '@feature/estudiante/shared/service/clase/clase.service';
import { EstudianteService } from '@feature/estudiante/shared/service/estudiante.service';
import { ProfesorService } from '@feature/profesor/shared/service/profesor.service';
import { of } from 'rxjs';

import { EstudianteDetailComponent } from './estudiante-detail.component';

describe('EstudianteDetailComponent', () => {
  let component: EstudianteDetailComponent;
  let fixture: ComponentFixture<EstudianteDetailComponent>;
  let claseService: ClaseService;
  const clases: ClaseCompleta[] = [
    {
      estudianteDTO: {
        id: 1,
        nivelEstudios: NivelEstudios.UNIVERSIDAD,
        persona: {
          apellidos: 'string',
          cedula: 'string',
          id: 1,
          nombres: 'string'
        }
      },
      fecha: '2021-08-25T17:05:04.841Z',
      id: 2,
      profesorDTO: {
        id: 2,
        persona: {
          apellidos: 'string',
          cedula: 'string',
          id: 1,
          nombres: 'string'
        },
        profesion: 'string'
      },
      valor: 1213
    },

    {
      estudianteDTO: {
        id: 2,
        nivelEstudios: NivelEstudios.UNIVERSIDAD,
        persona: {
          apellidos: 'string',
          cedula: 'string',
          id: 2,
          nombres: 'string'
        }
      },
      fecha: '2021-08-25T17:05:04.841Z',
      id: 3,
      profesorDTO: {
        id: 2,
        persona: {
          apellidos: 'string',
          cedula: 'string',
          id: 2,
          nombres: 'string'
        },
        profesion: 'string'
      },
      valor: 12321
    },

  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudianteDetailComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule, RouterTestingModule],
      providers: [HttpService, ClaseService, ProfesorService, EstudianteService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudianteDetailComponent);
    component = fixture.componentInstance;
    claseService = TestBed.inject(ClaseService);
    component.id = 1;
    spyOn(claseService, 'consultarEspecifico').and.returnValue(of(clases));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Listar todas las clases de un estudiante en especifico', () => {
    component.cargarClases();

    expect(claseService.consultarEspecifico).toHaveBeenCalled();
  });
});
