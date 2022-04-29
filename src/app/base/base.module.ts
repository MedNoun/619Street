import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BaseComponent } from './base.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    declarations: [BaseComponent],
    imports: [AppRoutingModule, SharedModule],
    exports: [BaseComponent]
})
export class BaseModule {}
