import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { ClaseCompleta } from '@feature/estudiante/shared/model/clase/clase-compuesta';
import { Estudiante } from '@feature/estudiante/shared/model/estudiante';
import { ClaseService } from '@feature/estudiante/shared/service/clase/clase.service';
import { EstudianteService } from '@feature/estudiante/shared/service/estudiante.service';
import { ProfesorService } from '@feature/profesor/shared/service/profesor.service';
import { clases, estudiante } from '@shared/mocks/mock-estudiante';
import { of } from 'rxjs';

import { EstudianteDetailComponent } from './estudiante-detail.component';

describe('EstudianteDetailComponent', () => {
  let component: EstudianteDetailComponent;
  let fixture: ComponentFixture<EstudianteDetailComponent>;
  let claseService: ClaseService;
  let estudianteService: EstudianteService;
  const estudianteTest: Estudiante = estudiante;
  const clasesTest: ClaseCompleta[] = clases;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudianteDetailComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [HttpService, ClaseService, ProfesorService, EstudianteService,
        {
        provide: ActivatedRoute,
        useValue: {
          snapshot: {params: {id: '1'}}
        }
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudianteDetailComponent);
    component = fixture.componentInstance;
    claseService = TestBed.inject(ClaseService);
    estudianteService =  TestBed.inject(EstudianteService);
    spyOn(claseService, 'consultarEspecifico').and.returnValue(of(clasesTest));
    spyOn(estudianteService, 'consultarEspecifico').and.returnValue(of(estudianteTest));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia recuperar el id del parametro en la ruta', () => {
    expect(1).toEqual(component.id);
  });

  it('Deberia obetener el estudiante', () => {
    component.ngOnInit();
    expect(component.estudianteActual).toEqual(estudianteTest);
  });

  it('Deberia utilizar el servicio para cargar las clases', () => {
    component.cargarClases();
    expect(claseService.consultarEspecifico).toHaveBeenCalled();
  });

  it('Deberia listar las clases', () => {
    component.ngOnInit();
    component.clasesEstudiante.subscribe(resultado => {
      expect(resultado).toBe(clasesTest);
    });
  });

  it('Deberia mostar mensaje de estado correcto', () => {
    component.cargarClases(true, 'crear');
    expect(component.estado).toBe('bien');
    expect(component.mensaje).toBe('crear la clase funciono correctamente');
  });

  it('Deberia mostrar mensaje de estado erroneo', () => {
    component.cargarClases(false, 'crear');
    expect(component.estado).toBe('error');
    expect(component.mensaje).not.toBe('crear la clase funciono correctamente');
  });

  it('Deberia no mostrar nada, sin estado', () => {
    component.cargarClases();
    expect(component.estado).not.toBe('error');
    expect(component.mensaje).not.toBe('crear la clase funciono correctamente');
  });
});
