import { NgModule } from '@angular/core';
import { HomepageModule } from '../homepage/homepage.module';
import { RegistrationModule } from '../registration/registration.module';
import { SharedModule } from '../shared/shared.module';
import { LoginModule } from '../login/login.module';

@NgModule({
    declarations: [],
<<<<<<< HEAD
    imports: [SharedModule, HomepageModule,RegistrationModule],
    exports: [HomepageModule,RegistrationModule]
=======
    imports: [SharedModule, HomepageModule,LoginModule],
    exports: [HomepageModule,LoginModule]
>>>>>>> feature/login
})
export class CoreModule {}
