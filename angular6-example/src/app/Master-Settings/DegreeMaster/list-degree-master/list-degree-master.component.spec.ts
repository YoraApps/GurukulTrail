import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDegreeMasterComponent } from './list-degree-master.component';

describe('ListDegreeMasterComponent', () => {
  let component: ListDegreeMasterComponent;
  let fixture: ComponentFixture<ListDegreeMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDegreeMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDegreeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
