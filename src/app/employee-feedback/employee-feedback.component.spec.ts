import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFeedbackComponent } from './employee-feedback.component';

describe('EmployeeFeedbackComponent', () => {
  let component: EmployeeFeedbackComponent;
  let fixture: ComponentFixture<EmployeeFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
