import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprogramstudyComponent } from './addprogramstudy.component';

describe('AddprogramstudyComponent', () => {
  let component: AddprogramstudyComponent;
  let fixture: ComponentFixture<AddprogramstudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddprogramstudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprogramstudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
