import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {OneWayBindingModule} from "../app/one-way-binding/one-way-binding.module"
import {FormDangNhapModule} from "../app/form-dang-nhap/form-dang-nhap.module"
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OneWayBindingModule,
    FormDangNhapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
