import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClubMasterComponent } from './add-club-master.component';

describe('AddClubMasterComponent', () => {
  let component: AddClubMasterComponent;
  let fixture: ComponentFixture<AddClubMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClubMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClubMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
