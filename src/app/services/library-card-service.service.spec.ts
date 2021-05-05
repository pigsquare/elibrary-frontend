import { TestBed } from '@angular/core/testing';

import { LibraryCardServiceService } from './library-card-service.service';

describe('LibraryCardServiceService', () => {
  let service: LibraryCardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibraryCardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
