import { Injectable } from '@angular/core';
import {
    HttpClient,
    HttpErrorResponse,
    HttpParams
} from '@angular/common/http';
import { catchError, retry, tap } from 'rxjs/operators';
import { content } from 'src/app/classes/fetchers/homepage/content';
import { Observable, throwError } from 'rxjs';
import * as productView from 'src/app/classes/fetchers/productView/content';
import { catalogue } from 'src/app/classes/fetchers/catalogue/catalogue';
import { product } from 'src/app/classes/models/product';
import { shared } from 'src/app/classes/fetchers/shared/shared';
@Injectable()
export class ApiService {
    private Url = 'http://localhost:3000/api/front-server';
    constructor(private http: HttpClient) {}
    private handleError(error: HttpErrorResponse): any {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(
                `Backend returned code ${error.status}, ` +
                    `body was: ${error.error}`
            );
        }
        throw Error('Something bad happened; please try again later.');
    }
    getHomepage(): Observable<any> {
        const homepageContent = this.http
        .get<content>(this.Url + '/homepage')
        .pipe(catchError(this.handleError));
        return homepageContent
    }
    getShared(): Observable<any> {
        return this.http
            .get<shared>(this.Url + '/shared')
            .pipe(catchError(this.handleError));
    }

    getCatalogue(): Observable<any> {
        return this.http.get<catalogue>(this.Url + '/catalogue');
    }

    getProductVew(): Observable<any> {
        return this.http
            .get<productView.content>(this.Url + '/productView')
            .pipe(catchError(this.handleError));
    }

    getProducts(): Observable<any> {
        const params = new HttpParams().set('opt', 1);
        return this.http
            .get<product>(this.Url + '/products', { params })
            .pipe(catchError(this.handleError));
    }
}
