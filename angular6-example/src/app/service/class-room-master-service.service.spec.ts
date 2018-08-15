import { TestBed, inject } from '@angular/core/testing';

import { ClassRoomMasterServiceService } from './class-room-master-service.service';

describe('ClassRoomMasterServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClassRoomMasterServiceService]
    });
  });

  it('should be created', inject([ClassRoomMasterServiceService], (service: ClassRoomMasterServiceService) => {
    expect(service).toBeTruthy();
  }));
});
