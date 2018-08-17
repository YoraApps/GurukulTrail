import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFacultDeptComponent } from './add-facult-dept.component';

describe('AddFacultDeptComponent', () => {
  let component: AddFacultDeptComponent;
  let fixture: ComponentFixture<AddFacultDeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFacultDeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFacultDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
