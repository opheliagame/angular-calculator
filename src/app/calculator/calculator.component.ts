import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  number1: string = "";
  number2: string = "";
  operatorSelected: boolean = false;
  equalSelected: boolean = false;
  operator: string;
  result: number = 0;

  constructor() { }

  ngOnInit() {
  	this.number1 = "";
  	this.number2 = "";
  }

  receiveNumber($event) {
    if(this.operatorSelected == true) {
      this.number2 = this.number2 + String($event);
    }
    else if(this.operatorSelected == false){
      this.number1 = this.number1 + String($event);
    }
    else if(this.operatorSelected == true && this.equalSelected == true) {
      this.number2 = this.number2 + String($event);
    }
  }

  receiveOperator($event) {
    this.operatorSelected = true;
    if(this.equalSelected) {
      this.number1 = String(this.result);
      this.number2 = "";
    }
    this.operator = String($event);
  }

  calculate() {
    this.equalSelected = true;
    switch (this.operator) {
      case "+":
        this.add();
        break;
      case "-":
        this.subtract();
        break;
      case "*":
        this.multiply();
        break;
      case "/":
        this.divide();
        break;

      default:
        // code...
        break;
    }
  }

  add() {
    if(this.result == 0) {
      this.result = Number(this.number1) + Number(this.number2);
    }
    else {
      this.result = this.result + Number(this.number2);
    } 
  }

  subtract() {
    if(this.result == 0) {
      this.result = Number(this.number1) - Number(this.number2);
    }
    else {
      this.result = this.result - Number(this.number2);
    }
  }

  multiply() {
    if(this.result == 0) {
      this.result = Number(this.number1) * Number(this.number2);
    }
    else {
      this.result = this.result * Number(this.number2);
    }
  }

  divide() {
    if(this.result == 0) {
      this.result = Number(this.number1) / Number(this.number2);
    }
    else {
      this.result = this.result / Number(this.number2);
    }
  }

  reset() {
    this.number1 = "";
    this.number2 = "";
    this.result = 0;
    this.operatorSelected = false;
    this.operator = "";
    this.equalSelected = false;
  }

}
