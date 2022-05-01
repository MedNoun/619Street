import { ApiService } from './../../datafetcher/service/api.service';
import { Component, OnInit } from '@angular/core';
import { content } from 'src/app/classes/fetchers/productView/content';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/classes/models/product';
import * as _ from 'lodash';

@Component({
    selector: 'app-product-view',
    templateUrl: './product-view.component.html',
    styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
    public content: content;
    public liked: number = -1;
    public product: product;
    constructor(
        private readonly api: ApiService,
        private readonly activatedRoute: ActivatedRoute
    ) {
        this.liked = -1;
        api.getProductVew().subscribe((value) => {
            this.content = value;
        });
    }
    public ngStyle = { height: '100vh !important' };
    ngOnInit(): void {
        this.activatedRoute.data.subscribe((data: { data: { products } }) => {
            this.product = _.find(data.data.products, {
                id: this.activatedRoute.snapshot.params['id']
            });
        });
        this.liked = this.product.liked;
    }
}
