import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { content } from '../classes/fetchers/login/content';
import { ApiService } from '../datafetcher/service/api.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public content: content;
    constructor(private readonly activatedRoute: ActivatedRoute) {}
    ngOnInit(): void {
        this.activatedRoute.data.subscribe((data: { content: content }) => {
            this.content = data.content;
        });
    }
}
