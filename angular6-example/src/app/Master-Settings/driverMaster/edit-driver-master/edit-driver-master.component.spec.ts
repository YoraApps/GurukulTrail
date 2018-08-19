import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDriverMasterComponent } from './edit-driver-master.component';

describe('EditDriverMasterComponent', () => {
  let component: EditDriverMasterComponent;
  let fixture: ComponentFixture<EditDriverMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDriverMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDriverMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
