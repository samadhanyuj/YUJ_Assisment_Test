import { TestBed } from '@angular/core/testing';

import { SignupAPIService } from './signup-api.service';

describe('SignupAPIService', () => {
  let service: SignupAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignupAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
