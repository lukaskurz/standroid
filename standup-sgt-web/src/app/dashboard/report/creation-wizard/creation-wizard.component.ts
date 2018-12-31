import { Component, OnInit, ViewChild } from '@angular/core';
import { ClrWizard, ClrModal } from '@clr/angular';
import { Report } from 'src/app/models/report';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/core/auth.service';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-creation-wizard',
  templateUrl: './creation-wizard.component.html',
  styleUrls: ['./creation-wizard.component.scss']
})
export class CreationWizardComponent {
  @ViewChild("wizard") wizard: ClrWizard;
  wizardOpen = false;

  @ViewChild("reminder") reminderModal: ClrModal;
  reminderModalOpen = false;

  report: Report = {
    uid: "",
    creator_uid: "",
    team_id: "",
    name: "Daily Standup",
    schedule: {
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: false,
      sunday: false,
      hour: 9,
      minute: 30,
    },
    questions: [
      "What did you do yesterday?",
      "What do plan on doing today?",
      "Did something hinder you with your work?",
      "Something worth mentioning?"
    ],
    selectedMembers: []
  };

  hours: number[] = [];
  minutes: number[] = [];

  teamMembers: any[] = [];

  constructor(private afs: AngularFirestore, private auth: AuthService, private http: HttpClient) {
    for (let counter = 0; counter < 24; counter++) {
      this.hours.push(counter);
    }
    for (let counter = 0; counter < 60 / 5; counter++) {
      this.minutes.push(counter * 5);
    }

    this.getTeamMembers();
  }

  anyDayChecked() {
    if (
      this.report.schedule.monday ||
      this.report.schedule.tuesday ||
      this.report.schedule.wednesday ||
      this.report.schedule.thursday ||
      this.report.schedule.friday ||
      this.report.schedule.saturday ||
      this.report.schedule.sunday
    ) {
      return true;
    }
    return false;
  }

  doCancel() {
    this.reminderModal.open();
  }

  closeModal() {
    this.reminderModal.close();
  }

  deleteQuestion(q: string) {
    const index = this.report.questions.indexOf(q);
    if (index !== -1) {
      this.report.questions.splice(index, 1);
    }
  }

  addQuestion() {
    this.report.questions.push("Another question");
  }

  getTeamMembers() {
    this.auth.user.pipe(first()).toPromise().then(u => {
      return this.afs.collection<{ team_id: string }>("installations", (ref) => {
        return ref.where("creator_uid", "==", u.uid).limit(1);
      }).get();
    }).then(query => {
      return query.pipe(first()).toPromise();
    }).then(snap => {
      const at = snap.docs[0].get("access_token");
      return this.http.get(`https://slack.com/api/users.list?token=${at}`).pipe(first()).toPromise();
    }).then((resp: { members: [] }) => {
      this.teamMembers = resp.members;
      this.teamMembers.unshift({ id: "-1", name: "Select a name" });
    });
  }

  selectTeamMember(id: string) {
    if (id === "-1") {
      return;
    }

    let index = -1;
    for (let i = 0; i < this.teamMembers.length; i++) {
      if (this.teamMembers[i].id === id) {
        index = i;
        break;
      }
    }

    if (index !== -1) {
      const member = this.teamMembers.splice(index, 1);
      this.report.selectedMembers.push(member[0]);
    }
  }

  deselectTeamMember(id: string) {
    if (id === "-1") {
      return;
    }

    let index = -1;
    for (let i = 0; i < this.report.selectedMembers.length; i++) {
      if (this.report.selectedMembers[i].id === id) {
        index = i;
        break;
      }
    }

    if (index !== -1) {
      const member = this.report.selectedMembers.splice(index, 1);
      this.teamMembers.push(member[0]);
    }
  }

  saveReport() {
    this.report.uid = this.afs.createId();

    this.auth.user.pipe(first()).toPromise().then(u => {
      this.report.creator_uid = u.uid;

      return this.afs.collection<{ team_id: string }>("installations", (ref) => {
        return ref.where("creator_uid", "==", u.uid).limit(1);
      }).get();
    }).then(query => {
      return query.pipe(first()).toPromise();
    }).then(snap => {
      this.report.team_id = snap.docs[0].get("team_id");

      const salt = new Date().toUTCString();
      this.afs.collection("reports").doc(this.report.uid).set(this.report);
    }).then(() => {
      this.wizardOpen = false;
    });
  }

}
