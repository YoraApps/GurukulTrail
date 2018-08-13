import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSemesterMasterComponent } from './add-semester-master.component';

describe('AddSemesterMasterComponent', () => {
  let component: AddSemesterMasterComponent;
  let fixture: ComponentFixture<AddSemesterMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSemesterMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSemesterMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
