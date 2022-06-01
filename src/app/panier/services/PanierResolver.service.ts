import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { content } from 'src/app/classes/fetchers/panier/content';
import { ApiService } from 'src/app/datafetcher/service/api.service';

@Injectable({
    providedIn: 'root'
})
export class PanierResolverService {
    constructor(private readonly api: ApiService) {}
}
