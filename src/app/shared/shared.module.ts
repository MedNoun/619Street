import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DatafetcherModule } from '../datafetcher/datafetcher.module';
import { CardComponent } from './components/card/card.component';

@NgModule({
    declarations: [NavbarComponent, CardComponent],
    imports: [CommonModule, DatafetcherModule],
    providers: [],
    exports: [CommonModule, NavbarComponent, DatafetcherModule, CardComponent]
})
export class SharedModule {}
