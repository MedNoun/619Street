import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { navbar } from 'src/app/classes/fetchers/shared/navbar';
import { ApiService } from 'src/app/datafetcher/service/api.service';

@Injectable({
    providedIn: 'root'
})
export class BaseResolverService implements Resolve<navbar> {
    constructor(private readonly api: ApiService) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): navbar | Observable<navbar> | Promise<navbar> {
        return this.api.getShared();
    }
}
