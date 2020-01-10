import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditManagerFeedbackComponent } from './edit-manager-feedback.component';

describe('EditManagerFeedbackComponent', () => {
  let component: EditManagerFeedbackComponent;
  let fixture: ComponentFixture<EditManagerFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditManagerFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditManagerFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
