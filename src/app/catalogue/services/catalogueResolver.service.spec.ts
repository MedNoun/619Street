import { TestBed } from '@angular/core/testing';

import { CatalogueResolverService } from './catalogueResolver.service';

describe('CatalogueResolverService', () => {
    let service: CatalogueResolverService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CatalogueResolverService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
