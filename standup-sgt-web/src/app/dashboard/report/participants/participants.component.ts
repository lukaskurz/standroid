import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/models/report';
import { DashboardStorageService } from 'src/app/dashboard-storage.service';
import { Member } from 'src/app/models/member';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {

  isModalOpen = false;

  teamMembers: Member[] = [];

  newTeamMember: Member;

  constructor(
    public storage: DashboardStorageService,
    private afs: AngularFirestore,
    private router: Router,
    private auth: AuthService,
    private http: HttpClient
  ) {
    this.getTeamMembers();
  }

  ngOnInit() {
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
      this.teamMembers = resp.members.filter((v1: Member) =>
        !this.storage.currentReport.selectedMembers.some((v2: Member) => v2.id === v1.id)
      );
      const selectUser = {
        id: "-1",
        name: "Select a name",
        color: undefined,
        deleted: undefined,
        is_bot: undefined,
        profile: undefined,
        real_name: undefined,
        team_id: undefined
      };
      this.newTeamMember = selectUser;
      this.teamMembers.unshift(selectUser);
    });
  }

  removeMember(member: Member) {
    const index = this.storage.currentReport.selectedMembers.indexOf(member);
    this.storage.currentReport.selectedMembers.splice(index, 1);
    this.afs
      .collection("reports")
      .doc(`${this.storage.currentReport.name}_${this.storage.currentReport.creator_uid}`)
      .update({ selectedMembers: this.storage.currentReport.selectedMembers });
    this.getTeamMembers();
  }

  openModal() {
    this.isModalOpen = true;
  }

  selectedMemberValid() {
    if (!!this.newTeamMember) {
      return this.newTeamMember.id !== "-1";
    }
    return false;
  }

  addTeamMember() {
    this.storage.currentReport.selectedMembers.push(this.newTeamMember);
    this.afs
      .collection("reports")
      .doc(`${this.storage.currentReport.name}_${this.storage.currentReport.creator_uid}`)
      .update({ selectedMembers: this.storage.currentReport.selectedMembers });
    this.isModalOpen = false;
    this.getTeamMembers();
  }

}
