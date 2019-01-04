import { Component, OnInit, ViewChild } from '@angular/core';
import { ClrWizard } from '@clr/angular';
import { User } from 'firebase';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth/auth.service';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { first, take } from 'rxjs/operators';

@Component({
  selector: 'app-install',
  templateUrl: './install.component.html',
  styleUrls: ['./install.component.scss']
})
export class InstallComponent implements OnInit {

  @ViewChild("wizard") wizard: ClrWizard;
  wizardOpen = true;

  user: User;

  installation: Observable<{ creator_uid: string }[]>;

  success = false;

  constructor(public auth: AuthService, private router: Router, private afs: AngularFirestore) {
    auth.user.pipe(first()).toPromise().then(user => {
      this.user = user;
    }).then(() => {
      this.installation = this.afs.collection<{ creator_uid: string }>("installations", (ref) => {
        if (this.user == null) {
          return ref;
        }
        return ref.where("creator_uid", "==", this.user.uid);
      }).valueChanges();
    }).then(() => {
      this.checkInstallation();
    });
  }

  ngOnInit() {
  }

  authorizeSlack() {
    // tslint:disable-next-line:max-line-length
    const link = `https://slack.com/oauth/authorize?client_id=501993948962.501928801988&state=${this.user.uid}&scope=incoming-webhook,commands,bot,users:read`;
    const popup = window.open(link, "Slack Verification", "width=700,height=700");
  }

  checkInstallation() {
    this.installation.subscribe((v) => {
      if (v.length > 0 && v[0].creator_uid === this.user.uid) {
        this.showInstallationSuccess();
      }
    });
  }

  showInstallationSuccess() {
    this.router.navigateByUrl("install/success");
    this.success = true;
  }

  doCancel() {
    // Ignore
  }

  redirectToSetup() {
    this.router.navigateByUrl("setup");
  }

}
