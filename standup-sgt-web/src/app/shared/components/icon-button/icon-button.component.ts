import { Component, Output, Input } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {

  @Output() click = new EventEmitter();
  @Input() type: string;

  constructor() { }

  triggerClick() {
    this.click.emit(null);
  }

}
