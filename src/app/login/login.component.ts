import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { form } from '../classes/fetchers/login/form';
import { ApiService } from '../datafetcher/service/api.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public content: form = new form();
    constructor(private readonly activatedRoute: ActivatedRoute) {}
    ngOnInit(): void {}
}
