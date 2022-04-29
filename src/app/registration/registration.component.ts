import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { content } from '../classes/fetchers/registration/content';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
    public content: content;
    constructor(private readonly activatedRoute: ActivatedRoute) {}
    ngOnInit(): void {
        this.activatedRoute.data.subscribe((data: { content: content }) => {
            this.content = data.content;
        });
    }
}
