import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from '@shared/components/icon-button/icon-button.component';
import { ClarityModule } from '@clr/angular';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OutlineButtonComponent } from './components/outline-button/outline-button.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  declarations: [
    IconButtonComponent,
    OutlineButtonComponent,
    PrimaryButtonComponent
  ],
  exports: [
    IconButtonComponent,
    OutlineButtonComponent,
    PrimaryButtonComponent
  ]
})
export class SharedModule { }
