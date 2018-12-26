import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NumberButtonComponent } from './number-button/number-button.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { OperatorButtonComponent } from './operator-button/operator-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NumberButtonComponent,
    CalculatorComponent,
    OperatorButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
