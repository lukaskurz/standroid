// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';

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
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SuccessComponent } from './install/success/success.component';
import { ReportComponent } from './dashboard/report/report.component';
import { ParticipantsComponent } from './dashboard/report/participants/participants.component';
import { ScheduleComponent } from './dashboard/report/schedule/schedule.component';
import { QuestionsComponent } from './dashboard/report/questions/questions.component';

@NgModule({
   declarations: [
      AppComponent,
      DashboardComponent,
      LoginComponent,
      RegisterComponent,
      EmailVerificationComponent,
      SetupComponent,
      InstallComponent,
      FailureComponent,
      SuccessComponent,
      ReportComponent,
      ParticipantsComponent,
      ScheduleComponent,
      QuestionsComponent
   ],
   imports: [
      ClarityModule,
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      AppRoutingModule,
      HttpClientModule,
      AngularFireModule.initializeApp(environment.firebase, "standup-sgt-web"),
      AngularFirestoreModule,
      CoreModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
