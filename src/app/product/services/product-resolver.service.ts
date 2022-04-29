import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot
} from '@angular/router';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { product } from 'src/app/classes/models/product';
import { ApiService } from 'src/app/datafetcher/service/api.service';

@Injectable({
    providedIn: 'root'
})
export class ProductResolverService implements Resolve<product[]> {
    constructor(private readonly api: ApiService) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): product[] | Observable<product[]> | Promise<product[]> {
        return this.api.getProducts();
    }
}
