import { Injectable } from '@angular/core';
import {
    HttpClient,
    HttpErrorResponse,
    HttpParams
} from '@angular/common/http';
import { catchError, retry, tap } from 'rxjs/operators';
import { content } from 'src/app/classes/fetchers/homepage/content';
import { Observable, throwError } from 'rxjs';
import * as login from 'src/app/classes/fetchers/login/content';
import * as registration from 'src/app/classes/fetchers/registration/content';
import * as productView from 'src/app/classes/fetchers/productView/content';
import { catalogue } from 'src/app/classes/fetchers/catalogue/catalogue';
import { product } from 'src/app/classes/models/product';
@Injectable()
export class ApiService {
    private Url = 'http://localhost:3000/populator';
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
        return this.http
            .get<content>(this.Url + '/homepage')
            .pipe(catchError(this.handleError));
    }

    getLogin(): Observable<any> {
        return this.http
            .get<login.content>(this.Url + '/login')
            .pipe(catchError(this.handleError));
    }

    getRegistration(): Observable<any> {
        return this.http
            .get<registration.content>(this.Url + '/registration')
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
