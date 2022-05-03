import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { form } from '../classes/fetchers/registration/form';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
    public content: form = new form();
    constructor(private readonly activatedRoute: ActivatedRoute) {}
    ngOnInit(): void {}
}
