import { TestBed } from '@angular/core/testing';

import { EnvironmentRepository } from '../environment.repository';

describe('EnvironmentRepository', () => {
  let service: EnvironmentRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvironmentRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
