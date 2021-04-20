import { TestBed } from '@angular/core/testing';

import { BookManageService } from './book-manage.service';

describe('BookManageService', () => {
  let service: BookManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
