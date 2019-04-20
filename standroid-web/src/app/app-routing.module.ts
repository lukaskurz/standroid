import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@modules/login/pages/login/login.component';
import { RegisterComponent } from '@modules/login/pages/register/register.component';
import { DashboardComponent } from '@modules/dashboard/pages/dashboard/dashboard.component';
import { AuthGuard } from '@core/guards/auth.guard';
import { EmailVerificationComponent } from '@modules/login/pages/email-verification/email-verification.component';
import { SetupComponent } from '@modules/setup/pages/setup/setup.component';
import { InstallComponent } from '@modules/setup/pages/install/install.component';
import { FailureComponent } from "@modules/setup/components/failure/failure.component";
import { SuccessComponent } from '@modules/setup/components/success/success.component';
import { ReportComponent } from '@modules/dashboard/pages/report/report.component';
import { ParticipantsComponent } from '@modules/dashboard/components/participants/participants.component';
import { ScheduleComponent } from '@modules/dashboard/components/schedule/schedule.component';
import { QuestionsComponent } from '@modules/dashboard/components/questions/questions.component';

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
  { path: "install", component: InstallComponent, children: installRoutes, canActivate: [AuthGuard] },
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard], children: dashboardRoutes },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
