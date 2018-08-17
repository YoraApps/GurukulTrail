import { TestBed, inject } from '@angular/core/testing';

import { ChapterMasterServiceService } from './chapter-master-service.service';

describe('ChapterMasterServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChapterMasterServiceService]
    });
  });

  it('should be created', inject([ChapterMasterServiceService], (service: ChapterMasterServiceService) => {
    expect(service).toBeTruthy();
  }));
});
