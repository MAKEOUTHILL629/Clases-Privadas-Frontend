import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProfesorComponent } from './card-profesor.component';

describe('CardProfesorComponent', () => {
  let component: CardProfesorComponent;
  let fixture: ComponentFixture<CardProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProfesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
