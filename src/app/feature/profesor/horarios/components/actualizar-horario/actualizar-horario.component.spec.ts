import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { DiasSemana } from '@core/modelo/dias-semana.enum';
import { HttpService } from '@core/services/http.service';
import { HorarioService } from '@feature/profesor/shared/service/horario/horario.service';
import { of } from 'rxjs';

import { ActualizarHorarioComponent } from './actualizar-horario.component';

describe('ActualizarHorarioComponent', () => {
  let component: ActualizarHorarioComponent;
  let fixture: ComponentFixture<ActualizarHorarioComponent>;
  let horarioService: HorarioService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualizarHorarioComponent],
      imports: [RouterTestingModule,
        HttpClientModule, ReactiveFormsModule,
        FormsModule],
      providers: [HttpService, HttpClient, HorarioService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarHorarioComponent);
    component = fixture.componentInstance;
    horarioService = TestBed.inject(HorarioService);
    spyOn(horarioService, 'actualizar').and.returnValue(of(true));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.formHorarioActualizar.valid).toBeFalsy();
  });


  it('Actualizar horario', () => {
    expect(component.formHorarioActualizar.valid).toBeFalsy();
    component.formHorarioActualizar.controls.diaSemanaActualizar.setValue(DiasSemana.VIERNES);
    component.formHorarioActualizar.controls.horaActualizar.setValue('16:00');
    expect(component.formHorarioActualizar.valid).toBeTruthy();
    component.actualizarHorario();
    expect(horarioService.actualizar).toHaveBeenCalled();
  });
});
