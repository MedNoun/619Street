import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomepageModule } from './homepage/homepage.module';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, CoreModule, LoginComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
