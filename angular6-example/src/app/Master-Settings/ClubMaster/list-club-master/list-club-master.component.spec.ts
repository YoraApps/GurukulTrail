import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClubMasterComponent } from './list-club-master.component';

describe('ListClubMasterComponent', () => {
  let component: ListClubMasterComponent;
  let fixture: ComponentFixture<ListClubMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListClubMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClubMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
