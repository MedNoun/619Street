import { Component, OnInit } from '@angular/core';

import { content } from '../classes/fetchers/homepage/content';
import { ApiService } from '../datafetcher/service/api.service';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
    public content: content;
    constructor(private api: ApiService) {
        api.getHomepage().subscribe((value) => {
            this.content = value;
        });
    }
    ngOnInit(): void {}
}
