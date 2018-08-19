import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFacultdeptComponent } from './edit-facultdept.component';

describe('EditFacultdeptComponent', () => {
  let component: EditFacultdeptComponent;
  let fixture: ComponentFixture<EditFacultdeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFacultdeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFacultdeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
