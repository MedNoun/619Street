import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DatafetcherModule } from '../datafetcher/datafetcher.module';

@NgModule({
    declarations: [NavbarComponent],
    imports: [CommonModule, DatafetcherModule],
    providers: [],
    exports: [CommonModule, NavbarComponent, DatafetcherModule]
})
export class SharedModule {}
