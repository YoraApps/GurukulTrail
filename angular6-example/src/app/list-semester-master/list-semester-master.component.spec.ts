import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSemesterMasterComponent } from './list-semester-master.component';

describe('ListSemesterMasterComponent', () => {
  let component: ListSemesterMasterComponent;
  let fixture: ComponentFixture<ListSemesterMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSemesterMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSemesterMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
