import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListprogramstudyComponent } from './listprogramstudy.component';

describe('ListprogramstudyComponent', () => {
  let component: ListprogramstudyComponent;
  let fixture: ComponentFixture<ListprogramstudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListprogramstudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListprogramstudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
