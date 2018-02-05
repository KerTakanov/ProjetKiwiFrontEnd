import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserEventFormComponent } from './create-user-event-form.component';

describe('CreateUserEventFormComponent', () => {
  let component: CreateUserEventFormComponent;
  let fixture: ComponentFixture<CreateUserEventFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUserEventFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserEventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
