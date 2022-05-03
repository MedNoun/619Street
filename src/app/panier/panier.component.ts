import { Component, OnInit } from '@angular/core';
import { content, item, products } from '../classes/fetchers/panier/content';
import { ApiService } from '../datafetcher/service/api.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  public content: content;
  public products: products = new products();
  public item : item = new item();

    constructor(private api: ApiService) {
        api.getPanier().subscribe((value) => {
            this.content = value;
        });
    }
    ngOnInit(): void {}
}
