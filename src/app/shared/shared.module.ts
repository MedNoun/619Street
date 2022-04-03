import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DatafetcherModule } from '../datafetcher/datafetcher.module';
import { CardComponent } from './components/card/card.component';
import { Style01Component } from './components/style01/style01.component';

@NgModule({
    declarations: [NavbarComponent, CardComponent, Style01Component],
    imports: [CommonModule, DatafetcherModule],
    providers: [],
    exports: [
        CommonModule,
        NavbarComponent,
        DatafetcherModule,
        CardComponent,
        Style01Component
    ]
})
export class SharedModule {}
