import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClubMasterComponent } from './edit-club-master.component';

describe('EditClubMasterComponent', () => {
  let component: EditClubMasterComponent;
  let fixture: ComponentFixture<EditClubMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditClubMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClubMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
