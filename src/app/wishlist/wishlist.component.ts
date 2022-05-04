import { Component, OnInit } from '@angular/core';
import { wishlist } from '../classes/fetchers/wishlist/wishlist';
import { ApiService } from '../datafetcher/service/api.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  public wishlist: wishlist;

  constructor(private api: ApiService) {
    api.getWishlist().subscribe((value) => {
      this.wishlist = value;
    });
  }

  ngOnInit(): void {
  }

}
