import { Component, OnInit } from '@angular/core';
import { content, item, products } from '../classes/fetchers/panier/content';
import { cartItem } from '../classes/models/cartItem';
import { ApiService } from '../datafetcher/service/api.service';
import { OrderService } from '../shared/services/order.service';

@Component({
    selector: 'app-panier',
    templateUrl: './panier.component.html',
    styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
    public content: content;
    public products: cartItem[];
    public item: item = new item();

    constructor(
        private api: ApiService,
        private readonly orderService: OrderService
    ) {}
    ngOnInit(): void {
        this.products = this.orderService.currentCommand;
        console.log(this.products);
    }
}
