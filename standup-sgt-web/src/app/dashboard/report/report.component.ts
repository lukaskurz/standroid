import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Report } from '../../models/report';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  reportsDocs: Observable<Report[]>;
  reports: Report[] = [];

  constructor(private afs: AngularFirestore) {
    this.getReports();
  }

  getReports() {
    this.reportsDocs = this.afs.collection<Report>("reports").valueChanges();
    this.reportsDocs.subscribe(reports => {
      this.reports = reports;
    });
  }

  ngOnInit() {
  }

}
