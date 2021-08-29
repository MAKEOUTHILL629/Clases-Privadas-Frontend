import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { TemaService } from '@feature/profesor/shared/service/tema/tema.service';
import { of } from 'rxjs';

import { ActualizarTemaComponent } from './actualizar-tema.component';

describe('ActualizarTemaComponent', () => {
  let component: ActualizarTemaComponent;
  let fixture: ComponentFixture<ActualizarTemaComponent>;
  let temaService: TemaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualizarTemaComponent],
      imports: [RouterTestingModule,
        HttpClientModule, ReactiveFormsModule,
        FormsModule],
      providers: [HttpClient, HttpService, TemaService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarTemaComponent);
    component = fixture.componentInstance;
    temaService = TestBed.inject(TemaService);
    spyOn(temaService, 'actualizar').and.returnValue(of(true));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.formTemaActualizar.valid).toBeFalsy();
  });

  it('Actualizar tema', () => {
    expect(component.formTemaActualizar.valid).toBeFalsy();
    component.formTemaActualizar.controls.temaActualizarText.setValue('Test Tema');
    expect(component.formTemaActualizar.valid).toBeTruthy();
    component.actualizarTema();
    expect(temaService.actualizar).toHaveBeenCalled();
  });

});
