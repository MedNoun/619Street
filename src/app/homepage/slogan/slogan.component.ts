import { Component, Input, OnInit } from '@angular/core';
import { slogan } from 'src/app/classes/fetchers/homepage/slogan';

@Component({
    selector: 'app-slogan',
    templateUrl: './slogan.component.html',
    styleUrls: ['./slogan.component.scss']
})
export class SloganComponent implements OnInit {
    @Input('slogan') slogan: slogan = {
        title: 'blah',
        subtitle: 'bigblah',
        paragraphTitle: 'doubleblah',
        paragraph: 'midium blah'
    };
    constructor() {}

    ngOnInit(): void {}
}
