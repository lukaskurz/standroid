import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent implements OnInit {

  @Output() click = new EventEmitter();
  @Input() disabled: boolean;

  constructor() { }

  ngOnInit() {
  }

  triggerClick() {
    this.click.emit(null);
  }

}
