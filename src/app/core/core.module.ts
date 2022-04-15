import { NgModule } from '@angular/core';
import { HomepageModule } from '../homepage/homepage.module';
import { SharedModule } from '../shared/shared.module';
import { LoginModule } from '../login/login.module';

@NgModule({
    declarations: [],
    imports: [SharedModule, HomepageModule,LoginModule],
    exports: [HomepageModule,LoginModule]
})
export class CoreModule {}
