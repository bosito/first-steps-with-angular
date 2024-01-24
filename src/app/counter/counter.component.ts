import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  counter = 0;

  handleCounter = (operation: '+' | '-') => operation === '+' ? this.counter++ : this.counter--;
}
