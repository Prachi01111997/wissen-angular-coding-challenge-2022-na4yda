import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UserDataComponent } from './user-data/user-data.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule,
  HttpClientModule ,CommonModule],
  declarations: [ AppComponent, HelloComponent, LoginComponent, WelcomeComponent ,UserDataComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
