import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpatientsComponent } from './adminpatients.component';

describe('AdminpatientsComponent', () => {
  let component: AdminpatientsComponent;
  let fixture: ComponentFixture<AdminpatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminpatientsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminpatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
