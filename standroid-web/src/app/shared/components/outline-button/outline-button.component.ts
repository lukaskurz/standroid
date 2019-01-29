import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-outline-button',
  templateUrl: './outline-button.component.html',
  styleUrls: ['./outline-button.component.scss']
})
export class OutlineButtonComponent implements OnInit {

  @Output() click = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  triggerClick() {
    this.click.emit(null);
  }

}
