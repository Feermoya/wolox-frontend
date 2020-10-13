import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginModule } from './auth/login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { TechsModule } from './components/pages/techs/techs.module';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HttpClientModule,
    TechsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
