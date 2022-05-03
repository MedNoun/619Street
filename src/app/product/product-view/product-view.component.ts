import { ApiService } from './../../datafetcher/service/api.service';
import { Component, OnInit } from '@angular/core';
import { content } from 'src/app/classes/fetchers/productView/content';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/classes/models/product';
import * as _ from 'lodash';
import { cartItem } from 'src/app/classes/models/cartItem';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
    selector: 'app-product-view',
    templateUrl: './product-view.component.html',
    styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
    public inputs: cartItem = new cartItem();
    public liked: number = -1;
    public product: product;
    public ngStyle = { height: '100vh !important' };
    constructor(
        private readonly cartService: OrderService,
        private readonly activatedRoute: ActivatedRoute
    ) {}

    handleLike() {
        this.liked *= -1;
        if (this.liked === -1) {
            this.cartService.unlike(this.product);
        } else {
            this.cartService.like(this.product);
        }
    }

    
    ngOnInit(): void {
        this.activatedRoute.data.subscribe((data: { data: { products } }) => {
            this.product = _.find(data.data.products, {
                id: this.activatedRoute.snapshot.params['id']
            });
        });
        let index = this.cartService.findIndex(
            this.cartService.wishlist,
            this.product,
            'id'
        );
        index !== -1 ? (this.liked = 1) : (this.liked = -1);
    }
    addToCart() {
        const newItem = new cartItem();
        this.cartService.copyObj(this.product, newItem);
        newItem.size = this.inputs.size
            ? this.inputs.size
            : this.product.sizes[0];
        newItem.color = this.inputs.color
            ? this.inputs.color
            : this.product.colors[0];
        newItem.quantity = 1;
        this.cartService.add(newItem);
    }
}
