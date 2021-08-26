import { formatDate } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { DiasSemana } from '@core/modelo/dias-semana.enum';
import { HttpService } from '@core/services/http.service';
import { ClaseService } from '@feature/estudiante/shared/service/clase/clase.service';
import { Horario } from '@feature/profesor/shared/model/horario/horario';
import { Profesor } from '@feature/profesor/shared/model/profesor';
import { HorarioService } from '@feature/profesor/shared/service/horario/horario.service';
import { ProfesorService } from '@feature/profesor/shared/service/profesor.service';
import { of } from 'rxjs';
import { CrearClaseComponent } from './crear-clase.component';

describe('Crear ClaseComponent', () => {
  let component: CrearClaseComponent;
  let fixture: ComponentFixture<CrearClaseComponent>;
  let claseService: ClaseService;
  let horarioService: HorarioService;
  let profesorService: ProfesorService;

  const horarios: Horario[] = [
    {
      id: 1,
      idProfesor: 1,
      diaSemana: DiasSemana.SABADO,
      hora: '13:00:00'
    },
    {
      id: 2,
      idProfesor: 2,
      diaSemana: DiasSemana.DOMINGO,
      hora: '15:00:00'
    },
  ];

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
      declarations: [CrearClaseComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [ClaseService, HorarioService, ProfesorService, HttpService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearClaseComponent);
    component = fixture.componentInstance;
    claseService = TestBed.inject(ClaseService);

    profesorService = TestBed.inject(ProfesorService);
    horarioService = TestBed.inject(HorarioService);
    spyOn(claseService, 'guardar').and.returnValue(
      of(true)
    );
    spyOn(horarioService, 'consultarEspecifico').and.returnValue(of(horarios));
    spyOn(profesorService, 'consultar').and.returnValue(of(profesores));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.formClase.valid).toBeFalsy();
  });

  it('Creando clase', () => {
    expect(component.formClase.valid).toBeFalsy();
    component.formClase.controls.profesor.setValue(1);
    component.formClase.controls.horaCita.setValue('2021-08-27 15:00');
    expect(component.formClase.valid).toBeTruthy();
    component.guardarClase();

  });

  it('Fecha actual formato string', () => {
    expect(component.dia()).toEqual(formatDate(new Date(), 'YYYY-MM-ddThh:mm', 'en-US'));
  });

  it(('Seleccionando el id del select en HTML'), () => {
    component.onSelect(1);
    expect(component.idProfesor).toEqual(1);
  });
});
