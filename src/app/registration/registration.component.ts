import { Component, OnInit } from '@angular/core';
import { content } from '../classes/fetchers/registration/content';
import { ApiService } from '../datafetcher/service/api.service';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
    public content: content;
    constructor(private api: ApiService) {
        api.getRegistration().subscribe((value) => {
            this.content = value;
        });
    }
    ngOnInit(): void {}
}
