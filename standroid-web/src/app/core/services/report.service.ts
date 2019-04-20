import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { UserService } from "./user.service";
import { ReplaySubject } from "rxjs";
import { Report } from "@app/shared/models/report";
import { Schedule } from "@app/shared/models/schedule";
import { Member } from "@app/shared/models/member";
import { take, tap } from "rxjs/operators";
import { InstallationService } from "./installation.service";
import { User } from "firebase";
import { Installation } from "@app/shared/models/installation";

@Injectable({
  providedIn: "root"
})
export class ReportService {
  private reports: ReplaySubject<Report[]>;

  constructor(
    private afs: AngularFirestore,
    private us: UserService,
    private is: InstallationService
  ) {
    this.reports = new ReplaySubject(1);
    this.setReports();
  }

  private setReports() {
    this.us.getUser().subscribe(user => {
      this.afs
        .collection<Report>("reports", ref => {
          return ref.where("creator_uid", "==", user.uid);
        })
        .valueChanges()
        .subscribe(reports => {
          if (reports != null) {
            this.reports.next(reports);
          }
        });
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

  async createReport(report: Report) {
    report.uid = this.afs.createId();

    const user: User = (await new Promise((resolve, reject) => {
      this.us.getUser().subscribe(u => {
        resolve(u);
      });
    })) as User;
    report.creator_uid = user.uid;

    const installation: Installation = (await new Promise((resolve, reject) => {
      this.is.getInstallation().subscribe(i => {
        resolve(i);
      });
    })) as Installation;
    report.team_id = installation.team_id;
    return this.afs
      .collection("reports")
      .doc(report.uid)
      .create(report);
  }

  private updateReport(report: Report, changes: {}) {
    return this.afs
      .collection("reports")
      .doc(report.uid)
      .update(changes);
  }
}
