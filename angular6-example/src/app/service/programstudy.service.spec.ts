import { TestBed, inject } from '@angular/core/testing';

import { ProgramstudyService } from './programstudy.service';

describe('ProgramstudyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgramstudyService]
    });
  });

  it('should be created', inject([ProgramstudyService], (service: ProgramstudyService) => {
    expect(service).toBeTruthy();
  }));
});
