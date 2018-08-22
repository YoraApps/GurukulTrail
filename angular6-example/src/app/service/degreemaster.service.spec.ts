import { TestBed, inject } from '@angular/core/testing';

import { DegreemasterService } from './degreemaster.service';

describe('DegreemasterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DegreemasterService]
    });
  });

  it('should be created', inject([DegreemasterService], (service: DegreemasterService) => {
    expect(service).toBeTruthy();
  }));
});
