import { NgModule } from '@angular/core';
import { EsnImageCaptchaComponent } from './esn-image-captcha.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    EsnImageCaptchaComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule
  ],
  exports: [
    EsnImageCaptchaComponent
  ]
})
export class EsnImageCaptchaModule { }
