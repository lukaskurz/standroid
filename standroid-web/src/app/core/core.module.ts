import { NgModule } from '@angular/core';

import { AuthService } from "@core/auth/auth.service";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { ReportService } from './services/report.service';
import { UserService } from './services/user.service';
import { InstallationService } from './services/installation.service';
import { SlackService } from './services/slack.service';

@NgModule({
  declarations: [],
  imports: [
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [AuthService, AngularFireAuthModule, AngularFirestoreModule, ReportService, UserService, InstallationService, SlackService]
})
export class CoreModule { }
