import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DatafetcherModule } from '../datafetcher/datafetcher.module';
import { CardComponent } from './components/card/card.component';
import { Style01Component } from './components/style01/style01.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BlobComponent } from './components/blob/blob.component';
import { CirclesComponent } from './components/circles/circles.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

import { ButtonsComponent } from './components/buttons/buttons.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ScriptService } from '../script/script.service';
import { AnimatedLikeComponent } from './components/animated-like/animated-like.component';

@NgModule({
    declarations: [
        NavbarComponent,
        CardComponent,
        Style01Component,
        FooterComponent,
        CarouselComponent,
        BlobComponent,
        CirclesComponent,
        CheckboxComponent,
        ButtonsComponent,
        AnimatedLikeComponent
    ],
    imports: [CommonModule, DatafetcherModule, ReactiveFormsModule],
    providers: [ScriptService],
    exports: [
        CommonModule,
        NavbarComponent,
        FooterComponent,
        DatafetcherModule,
        CardComponent,
        CarouselComponent,
        Style01Component,
        CirclesComponent,
        CheckboxComponent,
        ButtonsComponent,
        AnimatedLikeComponent
    ]
})
export class SharedModule {}
