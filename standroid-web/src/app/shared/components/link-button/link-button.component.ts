import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-link-button',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.scss']
})
export class LinkButtonComponent implements OnInit {

  @Output() click = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  triggerClick() {
    this.click.emit(null);
  }

}
