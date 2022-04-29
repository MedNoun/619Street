import { TestBed } from '@angular/core/testing';

import { RegisterResolverService } from './registerResolver.service';

describe('RegisterResolverService', () => {
    let service: RegisterResolverService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(RegisterResolverService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
