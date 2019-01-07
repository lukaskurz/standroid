import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { ClrWizard, ClrModal } from '@clr/angular';
import { Report } from 'src/app/shared/models/report';
import { Router } from '@angular/router';
import { SlackService } from '@app/core/services/slack.service';
import { ReportService } from '@app/core/services/report.service';
import { Member } from '@app/shared/models/member';
import { Channel } from '@app/shared/models/channel';

@Component({
  selector: 'app-creation-wizard',
  templateUrl: './creation-wizard.component.html',
  styleUrls: ['./creation-wizard.component.scss']
})
export class CreationWizardComponent implements OnInit {
  @Input() first = false;

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
    selectedMembers: [],
    channel: null
  };

  hours: number[] = [];
  minutes: number[] = [];

  teamMembers: Member[] = [];
  channels: Channel[] = [];


  constructor(private ss: SlackService, private router: Router, private rs: ReportService) {
    for (let counter = 0; counter < 24; counter++) {
      this.hours.push(counter);
    }
    for (let counter = 0; counter < 60 / 5; counter++) {
      this.minutes.push(counter * 5);
    }

    ss.getTeamMembers().subscribe(members => this.teamMembers = members);
    ss.getChannels().subscribe(channels => this.channels = channels);
  }

  ngOnInit() {
    if (this.first) {
      this.wizard.open();
    }
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
    if (this.first) {
      this.reminderModal.open();
    } else {
      this.wizard.close();
      this.resetWizard();
    }
  }

  closeModal() {
    this.reminderModal.close();
  }

  redirectToDashboard() {
    this.router.navigateByUrl("dashboard");
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

  selectChannel(id: string) {
    if (id === "-1") {
      return;
    }

    let index = -1;
    for (let i = 0; i < this.channels.length; i++) {
      if (this.channels[i].id === id) {
        index = i;
        break;
      }
    }

    if (index !== -1) {
      this.report.channel = this.channels[index];
    }
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
    console.log(this.report);
    // this.rs.createReport(this.report);
    // if (this.first) {
    //   this.redirectToDashboard();
    // }
  }

  resetWizard() {
    this.report = {
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
      selectedMembers: [],
      channel: null
    };

    this.wizard.reset();
  }

}
