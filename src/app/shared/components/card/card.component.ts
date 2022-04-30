import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { card } from 'src/app/classes/fetchers/shared/card';

class submit {
    id: string;
    name: string;
    type: string;
    size: number;
    color: string;
    price: number;
}
@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @Input('card') card: card;
    @Output('submit') submition: EventEmitter<submit> = new EventEmitter();
    btnContent = 'Add';
    tiltSettings;
    inputs: submit = new submit();
    form = new FormGroup({
        id: new FormControl(),
        name: new FormControl(),
        type: new FormControl(),
        size: new FormControl(),
        color: new FormControl(),
        price: new FormControl()
    });

    constructor(private readonly router: Router) {}
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
        this.form.setValue({
            id: this.card.id,
            name: this.card.name,
            type: this.card.type,
            price: this.card.price,
            size: this.inputs.size ? this.inputs.size : this.card.sizes[0],
            color: this.inputs.color ? this.inputs.color : this.card.colors[0]
        });
        this.submition.emit(this.form.value);
    }
}
