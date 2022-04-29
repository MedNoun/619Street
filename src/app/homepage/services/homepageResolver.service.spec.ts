import { TestBed } from '@angular/core/testing';

import { HomepageResolverService } from './homepageResolver.service';

describe('ResolverService', () => {
    let service: HomepageResolverService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(HomepageResolverService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
