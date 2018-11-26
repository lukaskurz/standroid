import { NgModule } from '@angular/core';

import { AuthService } from "./auth.service";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";

@NgModule({
  declarations: [],
  imports: [
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [AuthService]
})
export class CoreModule { }
