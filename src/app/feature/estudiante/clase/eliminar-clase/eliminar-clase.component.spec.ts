import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { ClaseService } from '@feature/estudiante/shared/service/clase/clase.service';
import { of } from 'rxjs';

import { EliminarClaseComponent } from './eliminar-clase.component';

describe('EliminarClaseComponent', () => {
  let component: EliminarClaseComponent;
  let fixture: ComponentFixture<EliminarClaseComponent>;
  let claseService: ClaseService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarClaseComponent ],
      imports: [HttpClientModule],
      providers: [HttpService, ClaseService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarClaseComponent);
    component = fixture.componentInstance;
    claseService = TestBed.inject(ClaseService);
    spyOn(claseService, 'eliminar').and.returnValue( of(true));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Eliminando clase', () => {
    component.idClase = 1;
    component.eliminarClase();
    expect(claseService.eliminar).toHaveBeenCalled();
  });
});
