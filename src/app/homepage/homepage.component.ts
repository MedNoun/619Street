import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { content } from '../classes/fetchers/homepage/content';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
    public content: content;
    constructor(private readonly activatedRoute: ActivatedRoute) {}
    getItem(e) {
        console.log(e);
    }
    ngOnInit(): void {
        this.activatedRoute.data.subscribe((data: { content: content }) => {
            this.content = data.content;
        });
    }
}
