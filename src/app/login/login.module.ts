import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,NavbarComponent
  ],
  exports: [LoginComponent]
})
export class LoginModule { }




