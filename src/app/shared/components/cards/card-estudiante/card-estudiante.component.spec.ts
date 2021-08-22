import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEstudianteComponent } from './card-estudiante.component';

describe('CardEstudianteComponent', () => {
  let component: CardEstudianteComponent;
  let fixture: ComponentFixture<CardEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEstudianteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
