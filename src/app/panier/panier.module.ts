import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PanierComponent } from './panier.component';



@NgModule({
  declarations: [ PanierComponent],
  imports: [SharedModule],
  exports: [PanierComponent]
})
export class PanierModule { }






