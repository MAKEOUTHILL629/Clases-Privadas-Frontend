
import { CommonModule, formatDate } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { ClaseCompleta } from '@feature/estudiante/shared/model/clase/clase-compuesta';
import { ClaseService } from '@feature/estudiante/shared/service/clase/clase.service';
import { Profesor } from '@feature/profesor/shared/model/profesor';
import { ProfesorService } from '@feature/profesor/shared/service/profesor.service';
import { clase } from '@shared/mocks/mock-estudiante';
import { profesores } from '@shared/mocks/mock-profesor';
import { of } from 'rxjs';



import { ActualizarClaseComponent } from './actualizar-clase.component';

describe('ActualizarClaseComponent', () => {
  let component: ActualizarClaseComponent;
  let fixture: ComponentFixture<ActualizarClaseComponent>;
  let profesorService: ProfesorService;
  let claseService: ClaseService;
  const claseTest: ClaseCompleta = clase;

  const profesoresTest: Profesor[] = profesores;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarClaseComponent],
      imports:
        [CommonModule,
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
    spyOn(profesorService, 'consultar').and.returnValue(of(profesoresTest));
    component.claseActualizar = claseTest;
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
    expect(claseService.actualizar).toHaveBeenCalled();
  });

  it('Fecha actual formato string', () => {
    component.ngOnInit();
    expect(component.diaActual).toEqual(formatDate(new Date(), 'YYYY-MM-ddThh:mm', 'en-US'));
  });

});
