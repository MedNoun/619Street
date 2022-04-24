import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductViewComponent } from './product-view/product-view.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductViewComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ProductViewComponent
  ]
})
export class ProductModule { }
