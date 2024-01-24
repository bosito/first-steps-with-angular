import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  formStates = {
    name: '',
    email: '',
    password: '',
  };

  handleShowValue = (valueInput: string) => console.log(valueInput);

  handleShowAllValues = () => console.log('values --->', this.formStates);
}
