import { Component, OnInit } from '@angular/core';
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
    public content: content;
    constructor(private api: ApiService) {
        api.getCatalogue().subscribe((value) => {
            this.filters = value;
            console.log(value);
        });
    }
    filter(e) {
        console.log('I am in filter', e);
    }

    ngOnInit(): void {}
}
