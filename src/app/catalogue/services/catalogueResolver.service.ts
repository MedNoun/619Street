import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { content } from 'src/app/classes/fetchers/homepage/content';
import { ApiService } from 'src/app/datafetcher/service/api.service';

@Injectable({
    providedIn: 'root'
})
export class CatalogueResolverService implements Resolve<content> {
    constructor(private readonly api: ApiService) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): content | Observable<content> | Promise<content> {
        return this.api.getCatalogue();
    }
}
