import { TestBed } from '@angular/core/testing';

import { TestChildService } from './test-child.service';

describe('TestChildService', () => {
  let service: TestChildService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestChildService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
