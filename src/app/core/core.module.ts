import { NgModule } from '@angular/core';
import { HomepageModule } from '../homepage/homepage.module';
import { RegistrationModule } from '../registration/registration.module';
import { SharedModule } from '../shared/shared.module';
import { LoginModule } from '../login/login.module';

@NgModule({
    declarations: [],
    imports: [SharedModule, HomepageModule,LoginModule,RegistrationModule],
    exports: [HomepageModule,LoginModule,RegistrationModule]
})
export class CoreModule {}
