import { TestBed } from '@angular/core/testing';

import { LoginpostService } from './loginpost.service';

describe('LoginpostService', () => {
  let service: LoginpostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginpostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
