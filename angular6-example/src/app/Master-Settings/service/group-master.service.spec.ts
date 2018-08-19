import { TestBed, inject } from '@angular/core/testing';

import { GroupMasterService } from './group-master.service';

describe('GroupMasterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupMasterService]
    });
  });

  it('should be created', inject([GroupMasterService], (service: GroupMasterService) => {
    expect(service).toBeTruthy();
  }));
});
