import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGroupMasterComponent } from './list-group-master.component';

describe('ListGroupMasterComponent', () => {
  let component: ListGroupMasterComponent;
  let fixture: ComponentFixture<ListGroupMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGroupMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGroupMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
