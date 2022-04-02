import { Component, Input, OnInit } from '@angular/core';
import { card } from 'src/app/classes/fetchers/shared/card';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @Input('card') card: card;
    constructor() {}
    ngOnInit(): void {}
}
