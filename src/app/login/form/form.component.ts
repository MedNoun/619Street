import { RegistrationService } from './../../base/services/registration.service';
import { LoginComponent } from './../login.component';
import { userLogin } from './../../classes/authentification/user';
import { Component, Input, OnInit } from '@angular/core';
import { form } from 'src/app/classes/fetchers/login/form';
import { JwtService } from 'src/app/datafetcher/service/jwt.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    @Input('form') form: form;
    public userToLogin: userLogin = new userLogin();
    constructor(
        private registrationService: RegistrationService,
        private router: Router,
        private jwtService: JwtService
    ) {}

    ngOnInit(): void {}
    login() {
        const userInfo = this.registrationService
            .login('/auth/login', this.userToLogin)
            .subscribe(
                (data) => {
                    this.jwtService.saveToken(data['token']);
                    this.router.navigate(['homepage']);
                },
                (error) => {
                    console.error(error);
                }
            );
    }
}
