import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { userLogin } from './../../classes/authentification/user';
import { user } from './../../classes/registration/user';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RegistrationService {
    private api_url_v1 = 'http://localhost:3000/api';
    constructor(private httpClient: HttpClient) {}
    private formatErrors(error: any) {
        return throwError(error.error);
    }
    register(path: string, userRegistred: user) {
        return this.httpClient.post(`${this.api_url_v1}${path}`, userRegistred);
    }
    login(path: string, userToLogin: userLogin) {
        return this.httpClient.post(`${this.api_url_v1}${path}`, userToLogin);
    }
}
