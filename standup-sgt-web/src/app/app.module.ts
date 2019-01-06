// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';

// Clarity
import { ClarityModule } from "@clr/angular";

// Application
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { DashboardComponent } from '@modules/dashboard/pages/dashboard/dashboard.component';
import { LoginComponent } from '@modules/login/pages/login/login.component';
import { RegisterComponent } from '@modules/login/pages/register/register.component';
import { AngularFireModule } from "@angular/fire";
import { environment } from '../environments/environment';
import { CoreModule } from '@core/core.module';
import { EmailVerificationComponent } from '@modules/login/pages/email-verification/email-verification.component';
import { SetupComponent } from '@modules/setup/pages/setup/setup.component';
import { InstallComponent } from '@modules/setup/pages/install/install.component';
import { FailureComponent } from '@modules/setup/components/failure/failure.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SuccessComponent } from '@modules/setup/components/success/success.component';
import { ReportComponent } from '@modules/dashboard/pages/report/report.component';
import { ParticipantsComponent } from '@modules/dashboard/components/participants/participants.component';
import { ScheduleComponent } from '@modules/dashboard/components/schedule/schedule.component';
import { QuestionsComponent } from '@modules/dashboard/components/questions/questions.component';
import { SharedModule } from '@shared/shared.module';

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
      QuestionsComponent,
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
      CoreModule,
      SharedModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
