import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCampaignItemComponent } from './list-campaign-item.component';

describe('ListCampaignItemComponent', () => {
  let component: ListCampaignItemComponent;
  let fixture: ComponentFixture<ListCampaignItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCampaignItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCampaignItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
