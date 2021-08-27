import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment.dev';
import { HorarioService } from './horario/horario.service';

import { ProfesorService } from './profesor.service';

describe('ProfesorService', () => {
  let httpMock: HttpTestingController;
  let service: ProfesorService;
  const apiEndpointProfesorConsulta = `${environment.endpoint}/profesores`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HorarioService, HttpService],
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ProfesorService);
  });

  it('should be created', () => {
    const horarioService: HorarioService = TestBed.inject(HorarioService);
    expect(horarioService).toBeTruthy();
  });

  it('deberia listar temas', () => {
    const dummyProfesores = [
      {
        id: 1,
        persona: {
          id: 1,
          nombres: 'prueba',
          apellidos: 'prueba',
          cedula: '1232131',
        },
        profesion: 'Doctor',
      },
      {
        id: 1,
        persona: {
          id: 1,
          nombres: 'prueba 2',
          apellidos: 'prueba 2',
          cedula: '123213121',
        },
        profesion: 'Programador',
      }
    ];
    service.consultar().subscribe((profesores) => {
      expect(profesores.length).toBe(2);
      expect(profesores).toEqual(dummyProfesores);
    });
    const req = httpMock.expectOne(apiEndpointProfesorConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyProfesores);
  });


});
