import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { TemaService } from '@feature/profesor/shared/service/tema/tema.service';
import { of } from 'rxjs';

import { EliminarTemaComponent } from './eliminar-tema.component';

describe('EliminarTemaComponent', () => {
  let component: EliminarTemaComponent;
  let fixture: ComponentFixture<EliminarTemaComponent>;
  let temaService: TemaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EliminarTemaComponent],
      imports: [RouterTestingModule,
        HttpClientModule, ReactiveFormsModule,
        FormsModule],
      providers: [HttpService, TemaService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarTemaComponent);
    component = fixture.componentInstance;
    temaService = TestBed.inject(TemaService);
    spyOn(temaService, 'eliminar').and.returnValue(of(true));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Eliminando tema', () => {
    component.idTemaEliminar = 1;
    component.eliminarTema();
    expect(temaService.eliminar).toHaveBeenCalled();
  });
});
