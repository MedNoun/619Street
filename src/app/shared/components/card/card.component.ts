import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { card } from 'src/app/classes/fetchers/shared/card';
import { cartItem } from 'src/app/classes/models/cartItem';
import { OrderService } from '../../services/order.service';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @Input('card') card: card;
    @Output('submit') submition: EventEmitter<cartItem> = new EventEmitter();
    btnContent = 'Add';
    tiltSettings;
    inputs: cartItem = new cartItem();

    constructor(
        private readonly router: Router,
        private readonly cartService: OrderService
    ) {}
    ngOnInit(): void {
        this.tiltSettings = {
            reverse: true,
            max: 15,
            speed: 5000,
            scale: '1.1',
            transition: true,
            gyroscope: true,
            glare: true,
            'max-glare': 0.1
        };
        if (this.card.price) {
            this.inputs.price = this.card.price;
        }
    }
    naveProduct() {
        this.router.navigateByUrl('product/' + this.card.id);
    }
    addToCart() {
        const newItem = new cartItem();
        this.cartService.copyObj(this.card, newItem);
        newItem.size = this.inputs.size ? this.inputs.size : this.card.sizes[0];
        newItem.color = this.inputs.color
            ? this.inputs.color
            : this.card.colors[0];
        newItem.quantity = 1;
        this.cartService.add(newItem);
        this.submition.emit(newItem);
    }
}
