import { content } from 'src/app/classes/fetchers/homepage/content';
;
import { ApiService } from './../../datafetcher/service/api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  public content : content
  constructor(private api : ApiService) {
    api.getHomepage().subscribe((value) => {
      this.content = value
    })
   }
  public ngStyle = {height :'100vh !important' }
  ngOnInit(): void {
  }

}
