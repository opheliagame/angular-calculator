import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number-button',
  templateUrl: './number-button.component.html',
  styleUrls: ['./number-button.component.css']
})
export class NumberButtonComponent implements OnInit {
  @Input() numberButton: Number;

  @Output() numberEvent = new EventEmitter<Number>();

  constructor() { }

  ngOnInit() {
  }

  sendNumber() {
  	this.numberEvent.emit(this.numberButton);
  }

}
