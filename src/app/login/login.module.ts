import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './form/form.component';

@NgModule({
    declarations: [LoginComponent, FormComponent],
    imports: [SharedModule],
    exports: [LoginComponent]
})
export class LoginModule {}
