import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment.dev';
import { NivelEstudios } from '../model/nivel-estudios.enum';

import { EstudianteService } from './estudiante.service';

describe('EstudianteService', () => {
  let httpMock: HttpTestingController;
  let service: EstudianteService;
  const apiEndpointEstudianteConsulta = `${environment.endpoint}/estudiantes`;
  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EstudianteService, HttpService],
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(EstudianteService);
  });

  it('should be created', () => {
    const estudianteService: EstudianteService =
    TestBed.inject(EstudianteService);
    expect(estudianteService).toBeTruthy();
  });

  it('deberia listar estudiante', () => {
    const dummyEstudiante = [
      {
        id: 1,
        persona: {
          id: 1,
          nombres: 'prueba 1',
          apellidos: 'prueba 1',
          cedula: '123456798'
        },
        nivelEstudios: NivelEstudios.PRIMARIA,
      },
      {
        id: 2,
        persona: {
          id: 2,
          nombres: 'prueba 2',
          apellidos: 'prueba 2',
          cedula: '223456798'
        },
        nivelEstudios: NivelEstudios.UNIVERSIDAD,
      }
    ];
    service.consultar().subscribe((estudiante) => {
      expect(estudiante.length).toBe(2);
      expect(estudiante).toEqual(dummyEstudiante);
    });
    const req = httpMock.expectOne(apiEndpointEstudianteConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyEstudiante);
  });
});
