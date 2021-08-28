import { formatDate } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { ClaseService } from '@feature/estudiante/shared/service/clase/clase.service';
import { Profesor } from '@feature/profesor/shared/model/profesor';
import { ProfesorService } from '@feature/profesor/shared/service/profesor.service';
import { profesores } from '@shared/mocks/mock-profesor';
import { of } from 'rxjs';
import { CrearClaseComponent } from './crear-clase.component';

describe('Crear ClaseComponent', () => {
  let component: CrearClaseComponent;
  let fixture: ComponentFixture<CrearClaseComponent>;
  let claseService: ClaseService;
  let profesorService: ProfesorService;

  const profesoresTest: Profesor[] = profesores;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CrearClaseComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [ClaseService, ProfesorService, HttpService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearClaseComponent);
    component = fixture.componentInstance;
    claseService = TestBed.inject(ClaseService);
    profesorService = TestBed.inject(ProfesorService);
    spyOn(claseService, 'guardar').and.returnValue(
      of(true)
    );
    spyOn(profesorService, 'consultar').and.returnValue(of(profesoresTest));
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
    expect(claseService.guardar).toHaveBeenCalled();

  });

  it('Fecha actual formato string', () => {
    component.ngOnInit();
    expect(component.diaActual).toEqual(formatDate(new Date(), 'YYYY-MM-ddThh:mm', 'en-US'));
  });

});
