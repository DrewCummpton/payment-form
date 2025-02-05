import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConvertPipe } from './convert.pipe';
import { CurrencyPipe, DatePipe, NgIf, PercentPipe, SlicePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConvertPipe, UpperCasePipe, DatePipe, CurrencyPipe, PercentPipe, NgIf, SlicePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Payment Form';
  name!: string;
  date!: string;
  amount!: number;
  interest!: number;
  suffix: boolean = false;

  onNameChange(event: Event) {
    this.name = (event.target as HTMLInputElement).value
  }

  onDateChange(event: Event) {
    this.date = (event.target as HTMLInputElement).value
  }

  onAmountChange(event: Event) {
    this.amount = parseFloat((event.target as HTMLInputElement).value);
  }

  onInterestChange(event: Event) {
    this.interest = parseFloat((event.target as HTMLInputElement).value);
  }
}