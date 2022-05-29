import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { navbar } from 'src/app/classes/fetchers/shared/navbar';
import { ApiService } from 'src/app/datafetcher/service/api.service';
import { PopulatorService } from 'src/app/shared/services/populator.service';

@Injectable({
    providedIn: 'root'
})
export class BaseResolverService implements Resolve<navbar> {
    constructor(
        private readonly api: ApiService,
        private readonly populatorService: PopulatorService
    ) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): navbar | Observable<navbar> | Promise<navbar> {
        return this.api.get('/shared').pipe(
            map((nav) => {
                return { ...this.populatorService.navbar, ...nav };
            })
        );
    }
}