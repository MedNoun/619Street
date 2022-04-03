import { NgModule } from '@angular/core';
import { HomepageModule } from '../homepage/homepage.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [],
    imports: [SharedModule, HomepageModule],
    exports: [HomepageModule]
})
export class CoreModule {}
