import { Injectable } from "@angular/core";
import { InstallationService } from "./installation.service";
import { Installation } from "@app/shared/models/installation";
import { HttpClient } from "@angular/common/http";
import {
  SlackUserListResponse,
  SlackChannelListResponse
} from "@app/shared/models/slack-responses";
import { Member } from "@app/shared/models/member";
import { Subject, ReplaySubject } from "rxjs";
import { Channel } from "@app/shared/models/channel";
import { checkNoChanges } from "@angular/core/src/render3/instructions";

@Injectable({
  providedIn: "root"
})
export class SlackService {
  private teamMembers: ReplaySubject<Member[]>;
  private channels: ReplaySubject<Channel[]>;
  constructor(private is: InstallationService, private http: HttpClient) {
    this.teamMembers = new ReplaySubject(1);
    this.channels = new ReplaySubject(1);
    this.requestTeamMembers().then(members => {
      if (members != null) {
        this.teamMembers.next(members);
      }
    });
    this.requestChannels().then(channels => {
      if (channels != null) {
        this.channels.next(channels);
      }
    });
  }

  getChannels(refresh = false) {
    if (refresh) {
      this.requestChannels().then(channels => {
        this.channels.next(channels);
      });
    }
    return this.channels.asObservable();
  }

  getTeamMembers(refresh = false) {
    if (refresh) {
      this.requestTeamMembers().then(members => {
        this.teamMembers.next(members);
      });
    }
    return this.teamMembers.asObservable();
  }

  private async requestChannels() {
    const installation: Installation = (await new Promise((resolve, reject) => {
      this.is.getInstallation().subscribe(i => resolve(i));
    })) as Installation;

    const response: SlackChannelListResponse = (await this.http
      .get(
        `https://slack.com/api/channels.list?token=${installation.bot.token}`
      )
      .toPromise()) as SlackChannelListResponse;

    if (response.ok === false) {
      return Promise.reject();
    }

    const channels: Channel[] = response.channels;

    if (
      response.response_metadata.next_cursor != null &&
      response.response_metadata.next_cursor !== ""
    ) {
      const otherChannels = await this.requestChannelsWithPagination(
        installation.bot.token,
        response.response_metadata.next_cursor
      );
      return channels.concat(otherChannels);
    }

    return channels;
  }

  private async requestTeamMembers() {
    const installation: Installation = (await new Promise((resolve, reject) => {
      this.is.getInstallation().subscribe(i => resolve(i));
    })) as Installation;

    const response: SlackUserListResponse = (await this.http
      .get(
        `https://slack.com/api/users.list?token=${installation.access_token}`
      )
      .toPromise()) as SlackUserListResponse;

    if (response.ok === false) {
      return Promise.reject();
    }

    const members: Member[] = response.members;

    if (
      response.response_metadata.next_cursor != null &&
      response.response_metadata.next_cursor !== ""
    ) {
      const otherMembers = await this.requestMembersWithPagination(
        installation.access_token,
        response.response_metadata.next_cursor
      );
      return members.concat(otherMembers);
    }

    return members;
  }

  private async requestMembersWithPagination(token: string, cursor: string) {
    let members: Member[] = [];
    let finished = false;
    let errorCount = 0;
    while (!finished || errorCount < 5) {
      const nextMembers = await this.http
        .get(`https://slack.com/api/users.list?token=${token}&cursor=${cursor}`)
        .map((response: SlackUserListResponse) => {
          if (response.ok === false) {
            errorCount++;
            return [];
          } else {
            if (
              response.response_metadata.next_cursor != null &&
              response.response_metadata.next_cursor !== ""
            ) {
              cursor = response.response_metadata.next_cursor;
            } else {
              finished = true;
            }

            return response.members;
          }
        })
        .toPromise();

      members = members.concat(nextMembers);
    }

    return members;
  }

  private async requestChannelsWithPagination(token: string, cursor: string) {
    let channels: Channel[] = [];
    let finished = false;
    let errorCount = 0;
    while (!finished || errorCount < 5) {
      const nextChannels = await this.http
        .get(
          `https://slack.com/api/channels.list?token=${token}&cursor=${cursor}`
        )
        .map((response: SlackChannelListResponse) => {
          if (response.ok === false) {
            errorCount++;
            return [];
          } else {
            if (
              response.response_metadata.next_cursor != null &&
              response.response_metadata.next_cursor !== ""
            ) {
              cursor = response.response_metadata.next_cursor;
            } else {
              finished = true;
            }

            return response.channels;
          }
        })
        .toPromise();

      channels = channels.concat(nextChannels);
    }

    return channels;
  }
}
