import { TestBed, inject } from '@angular/core/testing';

import { FacultyDeptService } from './faculty-dept.service';

describe('FacultyDeptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacultyDeptService]
    });
  });

  it('should be created', inject([FacultyDeptService], (service: FacultyDeptService) => {
    expect(service).toBeTruthy();
  }));
});
