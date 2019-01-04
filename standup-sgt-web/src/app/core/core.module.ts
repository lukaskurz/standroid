import { NgModule } from '@angular/core';

import { AuthService } from "./auth/auth.service";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";

@NgModule({
  declarations: [],
  imports: [
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [AuthService, AngularFireAuthModule, AngularFirestoreModule]
})
export class CoreModule { }
