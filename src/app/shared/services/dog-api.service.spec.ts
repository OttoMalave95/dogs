import { TestBed } from '@angular/core/testing';

import { DogApiService } from './dog-api.service';

describe('DogApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DogApiService = TestBed.get(DogApiService);
    expect(service).toBeTruthy();
  });
});
