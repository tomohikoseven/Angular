import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = [
    {label:'犬', value:'dog', selected: false },
    {label:'猫', value:'cat', selected: true },
    {label:'ハムスター', value:'hamster', selected: true },
    {label:'金魚', value:'fish', selected: false},
    {label:'亀', value:'turtle', selected: false}
  ];

  show() {
    console.log(this.data);
  }
}
