import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-style01',
    templateUrl: './style01.component.html',
    styleUrls: ['./style01.component.scss']
})
export class Style01Component implements OnInit {
    @Input('text') text: string;

    constructor() {}

    ngOnInit(): void {}
}
