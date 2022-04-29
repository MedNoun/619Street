import { Component, Input, OnInit } from '@angular/core';
import {
    adr,
    footer,
    innerRow,
    row
} from 'src/app/classes/fetchers/shared/footer';
import { ScriptService } from 'src/app/script/script.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    @Input('footer') footer: footer;
    rows: innerRow[];
    adr: adr;
    constructor(private readonly scripty: ScriptService) {}
    handleClick() {
        console.log(this.footer);
    }

    ngOnInit(): void {
        this.scripty
            .load('footer')
            .then((data) => {
                console.log('script loaded ', data);
            })
            .catch((error) => console.log(error));
    }
}
