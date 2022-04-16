import { NgModule } from '@angular/core';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { RegistrationComponent } from './registration.component';

@NgModule({
    declarations: [RegistrationComponent],
    imports: [SharedModule,NavbarComponent],
    exports: [RegistrationComponent]
})
export class RegistrationModule {}
