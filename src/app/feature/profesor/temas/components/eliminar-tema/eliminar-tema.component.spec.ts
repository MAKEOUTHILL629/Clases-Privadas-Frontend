import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarTemaComponent } from './eliminar-tema.component';

describe('EliminarTemaComponent', () => {
  let component: EliminarTemaComponent;
  let fixture: ComponentFixture<EliminarTemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarTemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
