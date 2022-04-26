import { Component, OnInit } from '@angular/core';
import { content } from '../classes/fetchers/login/content';
import { ApiService } from '../datafetcher/service/api.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public content: content;
    constructor(private api: ApiService) {
        api.getLogin().subscribe((value) => {
            this.content = value;
        });
    }
    ngOnInit(): void {}
}
