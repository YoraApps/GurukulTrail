import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClassRoomMasterComponent } from './add-class-room-master.component';

describe('AddClassRoomMasterComponent', () => {
  let component: AddClassRoomMasterComponent;
  let fixture: ComponentFixture<AddClassRoomMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClassRoomMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClassRoomMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
