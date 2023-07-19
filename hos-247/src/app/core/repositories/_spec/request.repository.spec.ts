import { TestBed } from '@angular/core/testing';

import { RequestRepository } from '../request.repository';

describe('RequestRepository', () => {
  let service: RequestRepository<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
