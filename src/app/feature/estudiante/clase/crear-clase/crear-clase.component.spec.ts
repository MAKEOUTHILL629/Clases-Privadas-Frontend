import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { ClaseService } from '@feature/estudiante/shared/service/clase/clase.service';

import { CrearClaseComponent } from './crear-clase.component';

describe('CrearClaseComponent', () => {
  let component: CrearClaseComponent;
  let fixture: ComponentFixture<CrearClaseComponent>;
  let claseService: ClaseService;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearClaseComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [ClaseService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
