import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selected = "hamster";
  data = [
    {label:'犬', value:'dog', disabled: false },
    {label:'猫', value:'cat', disabled: false },
    {label:'ハムスター', value:'hamster', disabled: false },
    {label:'金魚', value:'fish', disabled: true},
    {label:'亀', value:'turtle', disabled: false}
  ];

  show() {
    console.log("現在値:" + this.selected);
  }
}
