import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DatafetcherModule } from '../datafetcher/datafetcher.module';
import { CardComponent } from './components/card/card.component';
import { Style01Component } from './components/style01/style01.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BlobComponent } from './components/blob/blob.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

@NgModule({
    declarations: [
        NavbarComponent,
        CardComponent,
        Style01Component,
        FooterComponent,
        CarouselComponent,
        BlobComponent,
        CheckboxComponent
    ],
    imports: [CommonModule, DatafetcherModule],
    providers: [],
    exports: [
        CommonModule,
        NavbarComponent,
        FooterComponent,
        DatafetcherModule,
        CardComponent,
        CarouselComponent,
        Style01Component,
        CheckboxComponent
    ]
})
export class SharedModule {}
