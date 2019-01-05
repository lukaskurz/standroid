import { Injectable } from '@angular/core';
import { InstallationService } from './installation.service';
import { Installation } from '@app/shared/models/installation';
import { HttpClient } from '@angular/common/http';
import { SlackUserListResponse } from '@app/shared/models/slack-responses';
import { Member } from '@app/shared/models/member';
import { Subject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlackService {

  private teamMembers: ReplaySubject<Member[]>;
  constructor(private is: InstallationService, private http: HttpClient) {
    this.teamMembers = new ReplaySubject(1);
  }

  getTeamMembers(refresh = false) {
    if (refresh) {
      this.requestTeamMembers().then(members => {
        this.teamMembers.next(members);
      });
    }
    return this.teamMembers.asObservable();
  }

  private async requestTeamMembers() {
    const installation: Installation = (await new Promise((resolve, reject) => {
      this.is.getInstallation().subscribe(i => resolve(i));
    })) as Installation;

    const response: SlackUserListResponse = (
      await this.http.get(`https://slack.com/api/users.list?token=${installation.access_token}`).toPromise()
    ) as SlackUserListResponse;

    if (response.ok === false) {
      return Promise.reject();
    }

    const members: Member[] = response.members;

    if (response.response_metadata.next_cursor != null && response.response_metadata.next_cursor !== "") {
      const otherMembers = await this.requestWithPagination(installation.access_token, response.response_metadata.next_cursor);
      return members.concat(otherMembers);
    }

    return members;
  }

  private async requestWithPagination(token: string, cursor: string) {
    let members: Member[] = [];
    let finished = false;
    let errorCount = 0;
    while (!finished || errorCount < 5) {
      const nextMembers = await this.http.get(`https://slack.com/api/users.list?token=${token}&cursor=${cursor}`)
        .map((response: SlackUserListResponse) => {
          if (response.ok === false) {
            errorCount++;
            return [];
          } else {
            if (response.response_metadata.next_cursor != null && response.response_metadata.next_cursor !== "") {
              cursor = response.response_metadata.next_cursor;
            } else {
              finished = true;
            }

            return response.members;
          }
        }).toPromise();

      members = members.concat(nextMembers);
    }

    return members;
  }

}
