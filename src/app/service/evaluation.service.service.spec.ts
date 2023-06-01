import { TestBed } from '@angular/core/testing';

import { EvaluationServiceService } from './evaluation.service.service';

describe('EvaluationServiceService', () => {
  let service: EvaluationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvaluationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
