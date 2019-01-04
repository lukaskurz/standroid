import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Report } from '../../shared/models/report';
import { DashboardStorageService } from 'src/app/core/services/dashboard-storage.service';
import { Router } from '@angular/router';
import { CreationWizardComponent } from './creation-wizard/creation-wizard.component';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  @ViewChild("creationWizard") creationWizard: CreationWizardComponent;

  reportsDocs: Observable<Report[]>;
  reports: Report[] = [];

  constructor(private afs: AngularFirestore, private storage: DashboardStorageService, private router: Router) {
    this.getReports();
  }

  getReports() {
    this.reportsDocs = this.afs.collection<Report>("reports").valueChanges();
    this.reportsDocs.subscribe(reports => {
      this.reports = reports;
      this.storage.reports = reports;
      if (reports.length > 0) {
        this.setCurrentReport(reports[0]);
      }
    });
  }

  setCurrentReport(report: Report) {
    this.storage.currentReport = report;
  }

  goToParticipants(report: Report) {
    this.storage.currentReport = report;
    this.router.navigateByUrl("/dashboard/report/participants");
  }

  isActive(report: Report) {
    return this.storage.currentReport != null && report.uid === this.storage.currentReport.uid;
  }

  openWizard() {
    this.creationWizard.wizardOpen = true;
  }

  ngOnInit() {
  }

}
