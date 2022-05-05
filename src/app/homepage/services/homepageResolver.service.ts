import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { content } from 'src/app/classes/fetchers/homepage/content';
import { ApiService } from 'src/app/datafetcher/service/api.service';
import { PopulatorService } from 'src/app/shared/services/populator.service';

@Injectable({
    providedIn: 'root'
})
export class HomepageResolverService implements Resolve<content> {
    constructor(
        private readonly api: ApiService,
        private readonly populatorService: PopulatorService
    ) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): content | Observable<content> | Promise<content> {
        return this.api.get('/homepage').pipe(
            map((homepage) => {
                return { ...this.populatorService.homepage, ...homepage };
            })
        );
    }
}
