import { TestBed } from '@angular/core/testing';

import { ComplexFormApiService } from './complex-form-api.service';

describe('ComplexFormApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComplexFormApiService = TestBed.get(ComplexFormApiService);
    expect(service).toBeTruthy();
  });
});
