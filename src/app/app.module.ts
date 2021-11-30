import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SloganComponent } from './slogan/slogan.component';
import { CourouselComponent } from './courousel/courousel.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, SloganComponent, CourouselComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
