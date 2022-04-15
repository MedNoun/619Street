import { Component, Input, OnInit } from '@angular/core';
import {
    adr,
    footer,
    innerRow,
    row
} from 'src/app/classes/fetchers/shared/footer';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    @Input('footer') footer: footer;
    rows: innerRow[];
    adr: adr;
    constructor() {}
    handleClick() {
        console.log(this.footer);
    }

    ngOnInit(): void {}
}
