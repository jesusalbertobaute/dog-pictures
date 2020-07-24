import { TestBed } from '@angular/core/testing';

import { GetDogService } from './getdog.service';

describe('GetDogService', () => {
  let service: GetDogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
