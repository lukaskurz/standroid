import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Installation } from '@app/shared/models/installation';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from './user.service';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class InstallationService {

  private installation: ReplaySubject<Installation>;

  constructor(private afs: AngularFirestore, private us: UserService) {
    this.installation = new ReplaySubject(1);
    this.setInstallation();
  }

  private setInstallation() {
    this.us.getUser().subscribe(user => {
      this.afs.collection<Installation>("installations", ref => {
        return ref.where("creator_uid", "==", user.uid).limit(1);
      }).valueChanges().map(val => val[0]).subscribe(this.installation);
    });
  }

  getInstallation() {
    return this.installation.asObservable();
  }
}
