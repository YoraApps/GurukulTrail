import { TestBed, inject } from '@angular/core/testing';

import { SemesterMasterService } from './semester-master.service';

describe('SemesterMasterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SemesterMasterService]
    });
  });

  it('should be created', inject([SemesterMasterService], (service: SemesterMasterService) => {
    expect(service).toBeTruthy();
  }));
});
