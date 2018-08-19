import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChapterMasterComponent } from './list-chapter-master.component';

describe('ListChapterMasterComponent', () => {
  let component: ListChapterMasterComponent;
  let fixture: ComponentFixture<ListChapterMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListChapterMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListChapterMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
