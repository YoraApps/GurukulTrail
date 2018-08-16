import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClassRoomMasterComponent } from './list-class-room-master.component';

describe('ListClassRoomMasterComponent', () => {
  let component: ListClassRoomMasterComponent;
  let fixture: ComponentFixture<ListClassRoomMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListClassRoomMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClassRoomMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
