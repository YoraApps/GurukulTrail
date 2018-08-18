import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCampaignItemComponent } from './add-campaign-item.component';

describe('AddCampaignItemComponent', () => {
  let component: AddCampaignItemComponent;
  let fixture: ComponentFixture<AddCampaignItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCampaignItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCampaignItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
