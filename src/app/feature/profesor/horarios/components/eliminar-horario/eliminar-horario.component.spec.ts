import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { HorarioService } from '@feature/profesor/shared/service/horario/horario.service';

import { EliminarHorarioComponent } from './eliminar-horario.component';

describe('EliminarHorarioComponent', () => {
  let component: EliminarHorarioComponent;
  let fixture: ComponentFixture<EliminarHorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarHorarioComponent ],
      imports:[HttpClientTestingModule],
      providers: [HttpService, HorarioService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
