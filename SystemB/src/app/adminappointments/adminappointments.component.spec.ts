import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminappointmentsComponent } from './adminappointments.component';

describe('AdminappointmentsComponent', () => {
  let component: AdminappointmentsComponent;
  let fixture: ComponentFixture<AdminappointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminappointmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
