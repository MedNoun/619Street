import { NgModule } from '@angular/core';
import { SloganComponent } from './slogan/slogan.component';
import { SharedModule } from '../shared/shared.module';
import { HomepageComponent } from './homepage.component';

@NgModule({
    declarations: [SloganComponent, HomepageComponent],
    imports: [SharedModule],
    exports: [HomepageComponent]
})
export class HomepageModule {}
