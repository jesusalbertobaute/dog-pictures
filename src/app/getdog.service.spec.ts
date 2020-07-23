import { TestBed } from '@angular/core/testing';

import { GetdogService } from './getdog.service';

describe('GetdogService', () => {
  let service: GetdogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetdogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
