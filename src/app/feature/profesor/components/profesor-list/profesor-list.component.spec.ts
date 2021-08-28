import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { Profesor } from '@feature/profesor/shared/model/profesor';
import { ProfesorService } from '@feature/profesor/shared/service/profesor.service';
import { profesores } from '@shared/mocks/mock-profesor';
import { of } from 'rxjs';

import { ProfesorListComponent } from './profesor-list.component';

describe('ProfesorListComponent', () => {
  let component: ProfesorListComponent;
  let fixture: ComponentFixture<ProfesorListComponent>;
  let profesorService: ProfesorService;
  const listaProfesores: Profesor[] = profesores;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProfesorListComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [ProfesorService, HttpService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorListComponent);
    component = fixture.componentInstance;
    profesorService = TestBed.inject(ProfesorService);
    spyOn(profesorService, 'consultar').and.returnValue(
      of(listaProfesores)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia listar los profesores', () => {
    component.listarProfesores.subscribe(resultado => {
      expect(listaProfesores).toEqual(resultado);
    });
  });

});
