import { Component, OnInit } from '@angular/core';
import { content, item, products } from '../classes/fetchers/panier/content';
import { ApiService } from '../datafetcher/service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-panier',
    templateUrl: './panier.component.html',
    styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
    public content: content;
    public products: products = new products();
    public item: item = new item();

    constructor(
        private api: ApiService,
        private readonly activatedRoute: ActivatedRoute
    ) {
        api.getPanier().subscribe((value) => {
            this.content = value;
        });
    }
    ngOnInit(): void {
        this.activatedRoute.data.subscribe((data: { content }) => {
            this.content = data.content;
        });
    }
}
