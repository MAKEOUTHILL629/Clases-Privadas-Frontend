import { HttpResponse } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment.dev';
import { ClaseService } from './clase.service';

describe('ClaseService', () => {
  let httpMock: HttpTestingController;
  let service: ClaseService;
  const apiEndpointClaseConsulta = `${environment.endpoint}/clases`;
  const apiEndpointClase = `${environment.endpoint}/clase`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClaseService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ClaseService);
  });

  it('should be created', () => {
    const claseService: ClaseService = TestBed.inject(ClaseService);
    expect(claseService).toBeTruthy();
  });

  it('deberia listar clases', () => {
    const dummyClases = [
      {
        id: 1,
        idProfesor: 1,
        idEstudiante: 1,
        fecha: '2021-08-26 08:00',
        valor: 45000,
      },
      {
        id: 2,
        idProfesor: 2,
        idEstudiante: 2,
        fecha: '2022-08-26 08:00',
        valor: 55000,
      },
    ];
    service.consultar().subscribe((clases) => {
      expect(clases.length).toBe(2);
      expect(clases).toEqual(dummyClases);
    });
    const req = httpMock.expectOne(apiEndpointClaseConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyClases);
  });

  it('deberia crear una clase', () => {
    const dummyClase = {
      idEstudiante: 1,
      idProfesor: 2,
      fecha: '2021-08-24 20:00:00',
    };
    service.guardar(dummyClase).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointClase);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({ body: true }));
  });

  it('deberia actualizar una clase', () => {
    const dummyClase = {
      idEstudiante: 1,
      idProfesor: 2,
      fecha: '2021-08-24 20:00:00',
    };
    service.actualizar(dummyClase, 1).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });

    const req = httpMock.expectOne(`${apiEndpointClase}/1`);
    expect(req.request.method).toBe('PUT');
    req.event(new HttpResponse<boolean>({ body: true }));
  });

  it('deberia eliminar una clase', () => {
    service.eliminar(1).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });

    const req = httpMock.expectOne(`${apiEndpointClase}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({ body: true }));
  });
});
