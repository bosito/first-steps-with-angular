import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  text_color: string = '';
  disable_buttons: boolean = false;

  handleChangeColor = (color: 'red' | 'blue'| 'orange') => this.text_color = color;
  
}
