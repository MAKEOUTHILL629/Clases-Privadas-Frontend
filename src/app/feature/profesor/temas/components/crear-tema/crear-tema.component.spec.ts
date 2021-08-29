import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { TemaService } from '@feature/profesor/shared/service/tema/tema.service';
import { of } from 'rxjs';

import { CrearTemaComponent } from './crear-tema.component';

describe('CrearTemaComponent', () => {
  let component: CrearTemaComponent;
  let fixture: ComponentFixture<CrearTemaComponent>;
  let temaService: TemaService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CrearTemaComponent],
        imports: [
          CommonModule,
          HttpClientModule,
          RouterTestingModule,
          ReactiveFormsModule,
          FormsModule,
        ],
        providers: [TemaService, HttpService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTemaComponent);
    component = fixture.componentInstance;
    temaService = TestBed.inject(TemaService);
    spyOn(temaService, 'guardar').and.returnValue(of(true));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.temaForm.valid).toBeFalsy();
  });

  it('Registrando tema', () => {
    expect(component.temaForm.valid).toBeFalsy();
    component.temaForm.controls.tema.setValue('CALCULO');
    expect(component.temaForm.valid).toBeTruthy();
    component.guardarTema();
    expect(temaService.guardar).toHaveBeenCalled();
  });

});
