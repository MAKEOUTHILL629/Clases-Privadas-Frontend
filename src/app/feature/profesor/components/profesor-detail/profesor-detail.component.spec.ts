import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { HorarioService } from '@feature/profesor/shared/service/horario/horario.service';
import { ProfesorService } from '@feature/profesor/shared/service/profesor.service';
import { TemaService } from '@feature/profesor/shared/service/tema/tema.service';
import { horarios, profesor, temas } from '@shared/mocks/mock-profesor';
import { of } from 'rxjs';

import { ProfesorDetailComponent } from './profesor-detail.component';

describe('ProfesorDetailComponent', () => {
  let component: ProfesorDetailComponent;
  let fixture: ComponentFixture<ProfesorDetailComponent>;
  let profesorService: ProfesorService;
  let temaService: TemaService;
  let horarioService: HorarioService;
  const horariosTest = horarios;
  const profesorTest = profesor;
  const temasTest = temas;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfesorDetailComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [HttpService, ProfesorService, TemaService, HorarioService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: { id: '1' } }
          }
        }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorDetailComponent);
    component = fixture.componentInstance;
    temaService = TestBed.inject(TemaService);
    horarioService = TestBed.inject(HorarioService);
    profesorService = TestBed.inject(ProfesorService);

    spyOn(profesorService, 'consultarEspecifico').and.returnValue(of(profesorTest));
    spyOn(temaService, 'consultarEspecifico').and.returnValue(of(temasTest));
    spyOn(horarioService, 'consultarEspecifico').and.returnValue(of(horariosTest));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia recuperar el id del parametro en la ruta', () => {
    expect(1).toEqual(component.id);
  });

  it('Deberia obtener el profesor', () => {
    component.ngOnInit();
    expect(component.profesorActual).toEqual(profesorTest);
  });

  it('Deberia listar los temas', () => {
    component.temasProfesorActual.subscribe(resultado => {
      expect(resultado).toEqual(temasTest);
    });
  });

  it('Deberia listar los horarios', () => {
    component.horariosProfesorActual.subscribe(resultado => {
      expect(resultado).toEqual(horariosTest);
    });
  });

  it('Deberia utilizar el servicio de horarios', () => {
    component.cargarHorarios();
    expect(horarioService.consultarEspecifico).toHaveBeenCalled();
  });

  it('Deberia utilizar el servicio de temas', () => {
    component.cargarTemas();
    expect(temaService.consultarEspecifico).toHaveBeenCalled();
  });

});
