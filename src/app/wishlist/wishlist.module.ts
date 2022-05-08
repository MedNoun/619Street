import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { WishlistComponent } from './wishlist.component';


@NgModule({
  declarations: [WishlistComponent],
  imports: [SharedModule],
  exports: [WishlistComponent]
})

export class WishlistModule { }
