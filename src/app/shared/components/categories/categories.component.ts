import { ApiService } from './../../../datafetcher/service/api.service';
import { categories } from './../../../classes/fetchers/categoriespage/categories';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
    public content: categories[];
    public firstOfContent: categories;
    constructor(private api: ApiService) {
        api.getCategories().subscribe((value) => {
            this.content = value.categories;
            this.firstOfContent = this.content.shift();
        });
    }

    ngOnInit(): void {
    }
}
