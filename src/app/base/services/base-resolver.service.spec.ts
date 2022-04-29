import { TestBed } from '@angular/core/testing';

import { BaseResolverService } from './base-resolver.service';

describe('BaseResolverService', () => {
  let service: BaseResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
