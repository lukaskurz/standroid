import { Component, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Report } from '@shared/models/report';
import { CreationWizardComponent } from '@modules/dashboard/components/creation-wizard/creation-wizard.component';
import { ReportService } from '@app/core/services/report.service';
import { Schedule } from '@app/shared/models/schedule';
import { Member } from '@app/shared/models/member';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {

  @ViewChild("creationWizard") creationWizard: CreationWizardComponent;

  reports: Report[] = [];

  activeReport: Report;

  constructor(private afs: AngularFirestore, private rs: ReportService) {
    rs.getReports().subscribe(reports => {
      this.reports = reports;
      if (this.activeReport == null && this.reports.length > 0) {
        this.activeReport = reports[0];
      }
    });
  }

  setActiveReport(report: Report) {
    this.activeReport = report;
  }

  isActiveReport(report: Report) {
    return this.activeReport != null && report.uid === this.activeReport.uid;
  }

  openWizard() {
    this.creationWizard.wizardOpen = true;
  }

  updateSchedule(schedule: Schedule) {
    this.rs.updateSchedule(this.activeReport, schedule);
  }

  updateQuestions(questions: string[]) {
    this.rs.updateQuestions(this.activeReport, questions);
  }

  updateMembers(members: Member[]) {
    this.rs.updateMembers(this.activeReport, members);
  }

}
