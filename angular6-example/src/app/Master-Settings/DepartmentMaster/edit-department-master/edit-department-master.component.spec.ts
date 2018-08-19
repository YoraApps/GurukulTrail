import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDepartmentMasterComponent } from './edit-department-master.component';

describe('EditDepartmentMasterComponent', () => {
  let component: EditDepartmentMasterComponent;
  let fixture: ComponentFixture<EditDepartmentMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDepartmentMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDepartmentMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
