import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from './user.service';
import { ReplaySubject } from 'rxjs';
import { Report } from '@app/shared/models/report';
import { Schedule } from '@app/shared/models/schedule';
import { Member } from '@app/shared/models/member';
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private reports: ReplaySubject<Report[]>;

  constructor(private afs: AngularFirestore, private us: UserService) {
    this.reports = new ReplaySubject(1);
    this.setReports();
  }

  private setReports() {
    this.us.getUser().subscribe(user => {
      this.afs.collection<Report>("reports", ref => {
        return ref.where("creator_uid", "==", user.uid);
      }).valueChanges().subscribe(this.reports);
    });
  }

  getReports() {
    return this.reports.asObservable();
  }

  updateSchedule(report: Report, newSchedule: Schedule) {
    return this.updateReport(report, { schedule: newSchedule });
  }

  updateQuestions(report: Report, newQuestions: string[]) {
    return this.updateReport(report, { questions: newQuestions });
  }

  updateMembers(report: Report, newMember: Member[]) {
    return this.updateReport(report, { selectedMembers: newMember });
  }

  private updateReport(report: Report, changes: {}) {
    return this.afs
      .collection("reports")
      .doc(report.uid)
      .update(changes);
  }
}
