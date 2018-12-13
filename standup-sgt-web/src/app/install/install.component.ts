import { Component, OnInit, ViewChild } from '@angular/core';
import { ClrWizard } from '@clr/angular';
import { User } from 'firebase';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-install',
  templateUrl: './install.component.html',
  styleUrls: ['./install.component.scss']
})
export class InstallComponent implements OnInit {

  @ViewChild("wizard") wizard: ClrWizard;
  wizardOpen = true;

  user: User;

  constructor(public auth: AuthService, private router: Router) {
    auth.user.subscribe(user => {
      this.user = user;
      console.log(user);
    });
  }

  ngOnInit() {
  }

  authorizeSlack() {
    const link = `https://slack.com/oauth/authorize?client_id=501993948962.501928801988&state=${this.user.uid}&scope=incoming-webhook,bot`;
    window.open(link, "Slack Verification", "width=700,height=700");
  }

}
