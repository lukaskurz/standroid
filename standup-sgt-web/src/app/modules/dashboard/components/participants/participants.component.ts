import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Member } from 'src/app/shared/models/member';
import { SlackService } from '@app/core/services/slack.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent {

  @Input() members: Member[] = [];
  @Output() save = new EventEmitter();

  isModalOpen = false;
  teamMembers: Member[] = [];
  newTeamMember: Member;

  constructor(private ss: SlackService) {
    ss.getTeamMembers().subscribe(members => {
      this.teamMembers = members;
    });
  }

  removeMember(member: Member) {
    const index = this.members.indexOf(member);
    this.members.splice(index, 1);
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
    this.members.push(this.newTeamMember);
  }

  saveChanges() {
    this.save.emit(this.members);
  }

}
