import { TestBed } from '@angular/core/testing';

import { IntializeService } from './intialize.service';

describe('IntializeService', () => {
  let service: IntializeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntializeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
