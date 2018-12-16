import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/models/report';
import { DashboardStorageService } from 'src/app/dashboard-storage.service';
import { Member } from 'src/app/models/member';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {

  constructor(public storage: DashboardStorageService, private afs: AngularFirestore) {
  }

  ngOnInit() {
  }

  removeMember(member: Member) {
    const index = this.storage.currentReport.selectedMembers.indexOf(member);
    this.storage.currentReport.selectedMembers.splice(index, 1);
    this.afs
      .collection("reports")
      .doc(`${this.storage.currentReport.name}_${this.storage.currentReport.creator_uid}`)
      .update({ selectedMembers: this.storage.currentReport.selectedMembers });
  }

}
