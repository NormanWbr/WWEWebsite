import { TestBed } from '@angular/core/testing';

import { SuperstarService } from './superstar.service';

describe('SuperstarService', () => {
  let service: SuperstarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperstarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
