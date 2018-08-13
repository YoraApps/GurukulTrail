import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSemesterMasterComponent } from './edit-semester-master.component';

describe('EditSemesterMasterComponent', () => {
  let component: EditSemesterMasterComponent;
  let fixture: ComponentFixture<EditSemesterMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSemesterMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSemesterMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
