import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AngularFireModule } from "@angular/fire";
import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';
import { EmailVerificationComponent } from './email-verification/email-verification.component';

import { ClarityModule } from "@clr/angular";
import { FormsModule } from '@angular/forms';

@NgModule({
   declarations: [
      AppComponent,
      DashboardComponent,
      LoginComponent,
      RegisterComponent,
      EmailVerificationComponent
   ],
   imports: [
      ClarityModule,
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      AngularFireModule.initializeApp(environment.firebase, "standup-sgt-web"),
      CoreModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
