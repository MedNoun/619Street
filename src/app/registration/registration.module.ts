import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RegistrationComponent } from './registration.component';
import { FormComponent } from './form/form.component';

@NgModule({
    declarations: [RegistrationComponent, FormComponent],
    imports: [SharedModule , FormsModule],
    exports: [RegistrationComponent]
})
export class RegistrationModule {}
