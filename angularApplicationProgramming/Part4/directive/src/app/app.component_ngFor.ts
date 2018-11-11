import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books = [
    {
      isbn: '999',
      title: 'JavaScript',
      price: 2980,
      publisher: '技術評論社'
    },
    {
      isbn: '998',
      title: 'Android',
      price: 3200,
      publisher: '秀和システム'
    },
    {
      isbn: '997',
      title: 'Java',
      price: 2680,
      publisher: '技術評論社'
    },
    {
      isbn: '996',
      title: 'PHP',
      price: 3200,
      publisher: '翔泳社'
    },
    {
      isbn: '995',
      title: 'C++',
      price: 2800,
      publisher: '日経BP社'
    }
  ];
  season = '';

}
