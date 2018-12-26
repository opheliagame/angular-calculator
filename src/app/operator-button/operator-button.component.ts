import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-operator-button',
  templateUrl: './operator-button.component.html',
  styleUrls: ['../number-button/number-button.component.css']
})
export class OperatorButtonComponent implements OnInit {
  @Input() operatorButton: string;

  @Output() operatorEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  sendOperator() {
  	this.operatorEvent.emit(this.operatorButton);
  }

}
