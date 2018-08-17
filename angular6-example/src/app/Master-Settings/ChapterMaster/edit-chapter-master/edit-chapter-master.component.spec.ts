import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChapterMasterComponent } from './edit-chapter-master.component';

describe('EditChapterMasterComponent', () => {
  let component: EditChapterMasterComponent;
  let fixture: ComponentFixture<EditChapterMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditChapterMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChapterMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
