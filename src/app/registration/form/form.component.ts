import { RegistrationService } from './../../base/services/registration.service';
import { user } from './../../classes/registration/user';
import { Component, OnInit, Input } from '@angular/core';
import { form } from 'src/app/classes/fetchers/registration/form';
import { Router } from '@angular/router';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    @Input('form') form: form;
    public userToRegister: user = new user();
    status: string;
    constructor(
        private registerService: RegistrationService,
        private router: Router
    ) {}

    ngOnInit(): void {}

    saveUser() {
        this.userToRegister.seller = this.status === 'seller';
        this.registerService
            .register('/auth/register', this.userToRegister)
            .subscribe(
                (data) => {
                    this.router.navigate(['homepage']);
                },
                (error) => {
                    console.error(error);
                }
            );
    }
}
