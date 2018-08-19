import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprogramstudyComponent } from './editprogramstudy.component';

describe('EditprogramstudyComponent', () => {
  let component: EditprogramstudyComponent;
  let fixture: ComponentFixture<EditprogramstudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditprogramstudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprogramstudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
