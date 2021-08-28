import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DiasSemana } from '@core/modelo/dias-semana.enum';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment.dev';

import { HorarioService } from './horario.service';

describe('HorarioService', () => {
  let httpMock: HttpTestingController;
  let service: HorarioService;
  const apiEndpointHorarioConsulta = `${environment.endpoint}/horarios-profesor`;
  const apiEndpointHorarios = `${environment.endpoint}/horarios`;


  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HorarioService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(HorarioService);
  });

  it('should be created', () => {
    const horarioService: HorarioService = TestBed.inject(HorarioService);
    expect(horarioService).toBeTruthy();
  });

  it('deberia listar horarios', () => {
    const dummyHorarios = [
      { id: 1, idProfesor: 2, diaSemana: DiasSemana.LUNES, hora: '20:00:00' },
      { id: 2, idProfesor: 3, diaSemana: DiasSemana.MARTES, hora: '12:00:00' }
    ];
    service.consultar().subscribe(horarios => {
      expect(horarios.length).toBe(2);
      expect(horarios).toEqual(dummyHorarios);
    });
    const req = httpMock.expectOne(apiEndpointHorarioConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyHorarios);
  });

  it('deberia crear un horario', () => {
    const dummyHorario = { id: 1, idProfesor: 2, diaSemana: DiasSemana.LUNES, hora: '20:00:00' };
    service.guardar(dummyHorario).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointHorarios);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({ body: true }));
  });

  it('deberia actualizar un horario', () => {
    const dummyHorario = { id: 1, idProfesor: 2, diaSemana: DiasSemana.DOMINGO, hora: '20:00:00' };
    service.actualizar(dummyHorario, dummyHorario.id).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });

    const req = httpMock.expectOne(`${apiEndpointHorarios}/${dummyHorario.id}`);
    expect(req.request.method).toBe('PUT');
    req.event(new HttpResponse<boolean>({ body: true }));
  });

  it('deberia eliminar un horario', () => {
    const dummyHorario = { id: 1, idProfesor: 2, diaSemana: DiasSemana.LUNES, hora: '20:00:00' };
    service.eliminar(dummyHorario.id).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });

    const req = httpMock.expectOne(`${apiEndpointHorarios}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({ body: true }));
  });
});
