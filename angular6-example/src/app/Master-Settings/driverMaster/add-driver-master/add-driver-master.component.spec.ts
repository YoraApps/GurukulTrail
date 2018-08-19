import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDriverMasterComponent } from './add-driver-master.component';

describe('AddDriverMasterComponent', () => {
  let component: AddDriverMasterComponent;
  let fixture: ComponentFixture<AddDriverMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDriverMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDriverMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
