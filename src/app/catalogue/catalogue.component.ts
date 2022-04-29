import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catalogue } from '../classes/fetchers/catalogue/catalogue';
import { content } from '../classes/fetchers/homepage/content';
import { ApiService } from '../datafetcher/service/api.service';

@Component({
    selector: 'app-catalogue',
    templateUrl: './catalogue.component.html',
    styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {
    public filters: catalogue = new catalogue();
    constructor(private readonly activatedRoute: ActivatedRoute) {}
    filter(e) {
        console.log('I am in filter', e);
    }

    ngOnInit(): void {
        this.activatedRoute.data.subscribe((data: { content: catalogue }) => {
            this.filters = data.content;
        });
    }
}
