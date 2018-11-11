import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selected = 'dog';
  data = [
    {label:'犬', value:'dog' },
    {label:'猫', value:'cat' },
    {label:'ハムスター', value:'hamster' },
    {label:'金魚', value:'fish'},
    {label:'亀', value:'turtle'}
  ];

  show(i: number) {
    console.log('現在値(ラベル):' + this.data[i].label );
    console.log('現在値(値):'    + this.data[i].value );
  }
}
