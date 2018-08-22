import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDegreeMasterComponent } from './edit-degree-master.component';

describe('EditDegreeMasterComponent', () => {
  let component: EditDegreeMasterComponent;
  let fixture: ComponentFixture<EditDegreeMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDegreeMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDegreeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
