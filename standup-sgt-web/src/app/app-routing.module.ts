import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './core/auth.guard';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { SetupComponent } from './setup/setup.component';
import { InstallComponent } from './install/install.component';
import { FailureComponent } from "./install/failure/failure.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "email-verification", component: EmailVerificationComponent },
  { path: "setup", component: SetupComponent, canActivate: [AuthGuard] },
  {
    path: "install", component: InstallComponent, canActivate: [AuthGuard], children: [
      { path: "failure", component: FailureComponent, canActivate: [AuthGuard] }
    ]
  },
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
