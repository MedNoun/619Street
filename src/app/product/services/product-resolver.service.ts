import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot
} from '@angular/router';
import * as _ from 'lodash';
import { catchError, Observable } from 'rxjs';
import { product } from 'src/app/classes/models/product';
import { ApiService } from 'src/app/datafetcher/service/api.service';
import { PopulatorService } from 'src/app/shared/services/populator.service';

@Injectable({
    providedIn: 'root'
})
export class ProductResolverService implements Resolve<product[]> {
    constructor(
        private readonly api: ApiService,
        private readonly populatorService: PopulatorService
    ) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): product[] | Observable<product[]> | Promise<product[]> {
        return this.api.getProducts().pipe(
            catchError((e) => {
                return this.populatorService.cards;
            })
        );
    }
}
