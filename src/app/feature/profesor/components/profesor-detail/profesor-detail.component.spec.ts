import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';

import { ProfesorDetailComponent } from './profesor-detail.component';

describe('ProfesorDetailComponent', () => {
  let component: ProfesorDetailComponent;
  let fixture: ComponentFixture<ProfesorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesorDetailComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
