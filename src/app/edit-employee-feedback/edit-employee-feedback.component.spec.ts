import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeeFeedbackComponent } from './edit-employee-feedback.component';

describe('EditEmployeeFeedbackComponent', () => {
  let component: EditEmployeeFeedbackComponent;
  let fixture: ComponentFixture<EditEmployeeFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEmployeeFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmployeeFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
