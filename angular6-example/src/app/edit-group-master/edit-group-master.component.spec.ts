import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGroupMasterComponent } from './edit-group-master.component';

describe('EditGroupMasterComponent', () => {
  let component: EditGroupMasterComponent;
  let fixture: ComponentFixture<EditGroupMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGroupMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGroupMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
