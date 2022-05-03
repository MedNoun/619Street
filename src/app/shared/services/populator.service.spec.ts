import { TestBed } from '@angular/core/testing';

import { PopulatorService } from './populator.service';

describe('PopulatorService', () => {
  let service: PopulatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopulatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
