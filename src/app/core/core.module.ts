import { NgModule } from '@angular/core';
import { HomepageModule } from '../homepage/homepage.module';
import { RegistrationModule } from '../registration/registration.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [],
    imports: [SharedModule, HomepageModule,RegistrationModule],
    exports: [HomepageModule,RegistrationModule]
})
export class CoreModule {}
