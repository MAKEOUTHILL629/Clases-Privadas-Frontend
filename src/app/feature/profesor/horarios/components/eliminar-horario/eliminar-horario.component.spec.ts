import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { HorarioService } from '@feature/profesor/shared/service/horario/horario.service';
import { of } from 'rxjs';

import { EliminarHorarioComponent } from './eliminar-horario.component';

describe('EliminarHorarioComponent', () => {
  let component: EliminarHorarioComponent;
  let fixture: ComponentFixture<EliminarHorarioComponent>;
  let horarioService: HorarioService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarHorarioComponent ],
      imports: [HttpClientTestingModule],
      providers: [HttpService, HorarioService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarHorarioComponent);
    component = fixture.componentInstance;
    horarioService = TestBed.inject(HorarioService);
    spyOn(horarioService, 'eliminar').and.returnValue(of(true));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Eliminando horario', () => {
    component.idHorario = 1;
    component.eliminarHoriario();
    expect(horarioService.eliminar).toHaveBeenCalled();
  });
});
