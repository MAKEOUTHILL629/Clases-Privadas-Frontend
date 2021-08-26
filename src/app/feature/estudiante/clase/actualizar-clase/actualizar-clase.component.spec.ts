
import { CommonModule, formatDate } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { ClaseCompleta } from '@feature/estudiante/shared/model/clase/clase-compuesta';
import { NivelEstudios } from '@feature/estudiante/shared/model/nivel-estudios.enum';
import { ClaseService } from '@feature/estudiante/shared/service/clase/clase.service';
import { Profesor } from '@feature/profesor/shared/model/profesor';
import { ProfesorService } from '@feature/profesor/shared/service/profesor.service';
import { of } from 'rxjs';



import { ActualizarClaseComponent } from './actualizar-clase.component';

describe('ActualizarClaseComponent', () => {
  let component: ActualizarClaseComponent;
  let fixture: ComponentFixture<ActualizarClaseComponent>;
  let profesorService: ProfesorService;
  let claseService: ClaseService;
  const claseData: ClaseCompleta = {
    estudianteDTO: {
      id: 1,
      nivelEstudios: NivelEstudios.UNIVERSIDAD,
      persona: {
        apellidos: 'string',
        cedula: 'string',
        id: 0,
        nombres: 'string'
      }
    },
    fecha: '2021-08-25T17:05:04.841Z',
    id: 2,
    profesorDTO: {
      id: 1,
      persona: {
        apellidos: 'string',
        cedula: 'string',
        id: 1,
        nombres: 'string'
      },
      profesion: 'string'
    },
    valor: 12312312
  };

  const profesores: Profesor[] = [
    {
      id: 1,
      persona: {
        id: 1,
        apellidos: 'Prueba 1',
        nombres: 'Prueba 1',
        cedula: '123213321'
      },
      profesion: 'Biologo'
    },
    {
      id: 2,
      persona: {
        id: 2,
        apellidos: 'Prueba 2',
        nombres: 'Prueba 2',
        cedula: '223213321'
      },
      profesion: 'Programador'
    },
  ];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarClaseComponent],
      imports:
      [  CommonModule,
        RouterTestingModule,
        HttpClientModule, ReactiveFormsModule,
        FormsModule],
      providers: [HttpService, HttpClient, ClaseService, ProfesorService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarClaseComponent);
    component = fixture.componentInstance;
    profesorService = TestBed.inject(ProfesorService);
    claseService = TestBed.inject(ClaseService);
    spyOn(claseService, 'actualizar').and.returnValue(of(true));
    spyOn(profesorService, 'consultar').and.returnValue(of(profesores));
    component.claseActualizar = claseData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.formActualizarClase.valid).toBeFalsy();
  });

  it('Actualizar clase', () => {
    expect(component.formActualizarClase.valid).toBeFalsy();
    component.formActualizarClase.controls.profesorActualizar.setValue(2);
    component.formActualizarClase.controls.horaActualizar.setValue('2021-08-27 15:00');
    expect(component.formActualizarClase.valid).toBeTruthy();
    component.actualizarClase();
  });

  it('Fecha actual formato string', () => {
    expect(component.dia()).toEqual(formatDate(new Date(), 'YYYY-MM-ddThh:mm', 'en-US'));
  });
});
