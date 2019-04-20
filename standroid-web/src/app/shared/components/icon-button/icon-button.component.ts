import { Component, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {

  @Output() click = new EventEmitter();
  @Input() type: string;

  constructor() {
    this.click = new EventEmitter();
  }

  triggerClick() {
    this.click.emit(null);
  }

}
