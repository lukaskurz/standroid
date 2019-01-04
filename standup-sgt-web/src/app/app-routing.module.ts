import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './core/guards/auth.guard';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { SetupComponent } from './setup/setup.component';
import { InstallComponent } from './install/install.component';
import { FailureComponent } from "./install/failure/failure.component";
import { SuccessComponent } from './install/success/success.component';
import { ReportComponent } from './dashboard/report/report.component';
import { ParticipantsComponent } from './dashboard/report/participants/participants.component';
import { ScheduleComponent } from './dashboard/report/schedule/schedule.component';
import { QuestionsComponent } from './dashboard/report/questions/questions.component';

const dashboardRoutes: Routes = [
  { path: "", redirectTo: "report", pathMatch: "full" },
  { path: "report", component: ReportComponent }
];

const installRoutes: Routes = [
  { path: "failure", component: FailureComponent },
  { path: "success", component: SuccessComponent }
];

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "email-verification", component: EmailVerificationComponent },
  { path: "setup", component: SetupComponent, canActivate: [AuthGuard] },
  { path: "install", component: InstallComponent, children: installRoutes },
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard], children: dashboardRoutes },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
