import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserEventComponent } from './create-user-event.component';

describe('CreateUserEventComponent', () => {
  let component: CreateUserEventComponent;
  let fixture: ComponentFixture<CreateUserEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUserEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
