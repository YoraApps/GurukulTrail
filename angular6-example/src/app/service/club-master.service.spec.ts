import { TestBed, inject } from '@angular/core/testing';

import { ClubMasterService } from './club-master.service';

describe('ClubMasterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClubMasterService]
    });
  });

  it('should be created', inject([ClubMasterService], (service: ClubMasterService) => {
    expect(service).toBeTruthy();
  }));
});
