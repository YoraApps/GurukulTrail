import { TestBed, inject } from '@angular/core/testing';

import { CampaignItemService } from './campaign-item.service';

describe('CampaignItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampaignItemService]
    });
  });

  it('should be created', inject([CampaignItemService], (service: CampaignItemService) => {
    expect(service).toBeTruthy();
  }));
});
