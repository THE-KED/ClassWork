import { TestBed } from '@angular/core/testing';

import { ServiceAuthGuardGuard } from './service-auth-guard.guard';

describe('ServiceAuthGuardGuard', () => {
  let guard: ServiceAuthGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ServiceAuthGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
