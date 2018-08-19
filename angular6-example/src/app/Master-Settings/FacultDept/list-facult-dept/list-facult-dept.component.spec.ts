import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFacultDeptComponent } from './list-facult-dept.component';

describe('ListFacultDeptComponent', () => {
  let component: ListFacultDeptComponent;
  let fixture: ComponentFixture<ListFacultDeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFacultDeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFacultDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
