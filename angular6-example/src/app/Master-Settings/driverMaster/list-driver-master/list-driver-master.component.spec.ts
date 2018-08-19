import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDriverMasterComponent } from './list-driver-master.component';

describe('ListDriverMasterComponent', () => {
  let component: ListDriverMasterComponent;
  let fixture: ComponentFixture<ListDriverMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDriverMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDriverMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
