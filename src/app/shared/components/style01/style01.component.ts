import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-style01',
    templateUrl: './style01.component.html',
    styleUrls: ['./style01.component.scss']
})
export class Style01Component implements OnInit {
    @Input('text') text: string;
    @Input('ngStyle')
    set ngStyle(value: { [klass: string]: any } | null) {}
    @Input('line') line: boolean = true;
    constructor() {}

    ngOnInit(): void {}
}
