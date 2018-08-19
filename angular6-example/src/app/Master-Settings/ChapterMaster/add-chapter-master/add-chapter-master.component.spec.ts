import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChapterMasterComponent } from './add-chapter-master.component';

describe('AddChapterMasterComponent', () => {
  let component: AddChapterMasterComponent;
  let fixture: ComponentFixture<AddChapterMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChapterMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChapterMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
