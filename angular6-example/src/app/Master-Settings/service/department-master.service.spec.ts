import { TestBed, inject } from '@angular/core/testing';

import { DepartmentMasterService } from './department-master.service';

describe('DepartmentMasterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DepartmentMasterService]
    });
  });

  it('should be created', inject([DepartmentMasterService], (service: DepartmentMasterService) => {
    expect(service).toBeTruthy();
  }));
});
