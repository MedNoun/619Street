import { Component, OnInit } from '@angular/core';
import { filters } from '../classes/fetchers/catalogue/filters';
import { content } from '../classes/fetchers/homepage/content';
import { ApiService } from '../datafetcher/service/api.service';

@Component({
    selector: 'app-catalogue',
    templateUrl: './catalogue.component.html',
    styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {
    public content: content;
    public filters: filters = new filters();

    constructor(private api: ApiService) {
        api.getHomepage().subscribe((value) => {
            this.content = value;
        });
    }
    filter(e) {
        console.log('I am in filter', e);
    }

    ngOnInit(): void {}
}
