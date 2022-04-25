import { NgModule } from '@angular/core';
import { CatalogueComponent } from './catalogue.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [CatalogueComponent],
    imports: [SharedModule],
    exports: [CatalogueComponent]
})
export class CatalogueModule {}
