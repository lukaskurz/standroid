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

@NgModule({
   declarations: [
      AppComponent,
      DashboardComponent,
      LoginComponent,
      RegisterComponent,
      EmailVerificationComponent
   ],
   imports: [
      BrowserModule,
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
