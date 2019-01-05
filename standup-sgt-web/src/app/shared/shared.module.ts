import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from '@shared/components/icon-button/icon-button.component';
import { ClarityModule } from '@clr/angular';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  declarations: [IconButtonComponent],
  exports: [IconButtonComponent]
})
export class SharedModule { }
