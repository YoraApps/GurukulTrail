import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGroupMasterComponent } from './add-group-master.component';

describe('AddGroupMasterComponent', () => {
  let component: AddGroupMasterComponent;
  let fixture: ComponentFixture<AddGroupMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGroupMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGroupMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
