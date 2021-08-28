import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment.dev';

import { TemaService } from './tema.service';

describe('TemaService', () => {
  let httpMock: HttpTestingController;
  let service: TemaService;
  const apiEndPointTemaConsulta = `${environment.endpoint}/temas-profesor`;
  const apiEndPointTemas = `${environment.endpoint}/temas`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TemaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(TemaService);
  });

  it('should be created', () => {
    const temaService: TemaService = TestBed.inject(TemaService);
    expect(temaService).toBeTruthy();
  });

  it('deberia listar temas', () => {
    const dummyTemas = [
      { id: 1, idProfesor: 2, tema: 'Consultas SQL' },
      { id: 2, idProfesor: 3, tema: 'Programacion Funcional' }
    ];
    service.consultar().subscribe(temas => {
      expect(temas.length).toBe(2);
      expect(temas).toEqual(dummyTemas);
    });
    const req = httpMock.expectOne(apiEndPointTemaConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyTemas);
  });

  it('deberia crear un tema', () => {
    const dummyTema = { id: 1, idProfesor: 2, tema: 'Consultas SQL' };
    service.guardar(dummyTema).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndPointTemas);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({ body: true }));
  });

  it('deberia actualizar un tema', () => {
    const dummyTema = { id: 1, idProfesor: 2, tema: 'Consultas SQL' };
    service.actualizar(dummyTema, dummyTema.id).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });

    const req = httpMock.expectOne(`${apiEndPointTemas}/${dummyTema.id}`);
    expect(req.request.method).toBe('PUT');
    req.event(new HttpResponse<boolean>({ body: true }));
  });

  it('deberia eliminar un tema', () => {
    const dumyTema = { id: 1, idProfesor: 2, tema: 'Consultas SQL' };
    service.eliminar(dumyTema.id).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });

    const req = httpMock.expectOne(`${apiEndPointTemas}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({ body: true }));
  });


});
