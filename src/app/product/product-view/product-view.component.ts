import { ApiService } from './../../datafetcher/service/api.service';
import { Component, OnInit } from '@angular/core';
import { content } from 'src/app/classes/fetchers/productView/content';

@Component({
    selector: 'app-product-view',
    templateUrl: './product-view.component.html',
    styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
    public content: content;
    constructor(private api: ApiService) {
        api.getProductVew().subscribe((value) => {
            this.content = value;
            console.log("content :" ,this.content),
            console.log("value :" ,value) 
        });
    }
    public ngStyle = { height: '100vh !important' };
    ngOnInit(): void {}
}
