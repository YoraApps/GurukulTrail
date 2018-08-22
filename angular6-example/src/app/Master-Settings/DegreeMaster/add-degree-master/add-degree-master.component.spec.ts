import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDegreeMasterComponent } from './add-degree-master.component';

describe('AddDegreeMasterComponent', () => {
  let component: AddDegreeMasterComponent;
  let fixture: ComponentFixture<AddDegreeMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDegreeMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDegreeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
