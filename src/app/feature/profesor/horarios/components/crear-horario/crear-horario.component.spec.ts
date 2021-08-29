import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { DiasSemana } from '@core/modelo/dias-semana.enum';
import { HttpService } from '@core/services/http.service';
import { HorarioService } from '@feature/profesor/shared/service/horario/horario.service';
import { of } from 'rxjs';

import { CrearHorarioComponent } from './crear-horario.component';

describe('CrearHorarioComponent', () => {
  let component: CrearHorarioComponent;
  let fixture: ComponentFixture<CrearHorarioComponent>;
  let horarioService: HorarioService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CrearHorarioComponent],
        imports: [
          CommonModule,
          HttpClientModule,
          RouterTestingModule,
          ReactiveFormsModule,
          FormsModule,
        ],
        providers: [HorarioService, HttpService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearHorarioComponent);
    component = fixture.componentInstance;
    horarioService = TestBed.inject(HorarioService);
    spyOn(horarioService, 'guardar').and.returnValue(of(true));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.horarioForm.valid).toBeFalsy();
  });

  it('Registrando horario', () => {
    expect(component.horarioForm.valid).toBeFalsy();
    component.horarioForm.controls.diaSemana.setValue(DiasSemana.LUNES);
    component.horarioForm.controls.hora.setValue('02:00');
    expect(component.horarioForm.valid).toBeTruthy();
    component.guardarHorario();
    expect(horarioService.guardar).toHaveBeenCalled();
  });
});
