import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry, tap } from 'rxjs/operators';
import { content } from 'src/app/classes/fetchers/homepage/content';
import { slogan } from 'src/app/classes/fetchers/homepage/slogan';
import { Observable, throwError } from 'rxjs';
import * as login from 'src/app/classes/fetchers/login/content';
import * as registration from 'src/app/classes/fetchers/registration/content';
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
        return this.http
            .get<registration.content>(this.Url + '/catalogue')
            .pipe(catchError(this.handleError));
    }
}
