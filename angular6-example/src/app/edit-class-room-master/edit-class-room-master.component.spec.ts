import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClassRoomMasterComponent } from './edit-class-room-master.component';

describe('EditClassRoomMasterComponent', () => {
  let component: EditClassRoomMasterComponent;
  let fixture: ComponentFixture<EditClassRoomMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditClassRoomMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClassRoomMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
