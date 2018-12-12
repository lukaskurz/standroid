// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// Clarity
import { ClarityModule } from "@clr/angular";

// Application
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AngularFireModule } from "@angular/fire";
import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { SetupComponent } from './setup/setup.component';
import { InstallComponent } from './install/install.component';
import { FailureComponent } from './install/failure/failure.component';

@NgModule({
   declarations: [
      AppComponent,
      DashboardComponent,
      LoginComponent,
      RegisterComponent,
      EmailVerificationComponent,
      SetupComponent,
      InstallComponent,
      FailureComponent
   ],
   imports: [
      ClarityModule,
      BrowserModule,
      BrowserAnimationsModule,
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
