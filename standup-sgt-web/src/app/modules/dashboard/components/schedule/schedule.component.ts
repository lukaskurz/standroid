import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Schedule } from '@app/shared/models/schedule';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {

  @Input() schedule: Schedule;
  @Output() save = new EventEmitter();

  hours: number[] = [];
  minutes: number[] = [];

  constructor() {
    for (let counter = 0; counter < 24; counter++) {
      this.hours.push(counter);
    }
    for (let counter = 0; counter < 60 / 5; counter++) {
      this.minutes.push(counter * 5);
    }
  }

  saveSchedule() {
    this.save.emit(this.schedule);
  }


}
