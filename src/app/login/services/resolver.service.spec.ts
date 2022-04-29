import { TestBed } from '@angular/core/testing';

import { LoginResolverService } from './loginResolver.service';

describe('LoginResolverService', () => {
    let service: LoginResolverService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LoginResolverService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
