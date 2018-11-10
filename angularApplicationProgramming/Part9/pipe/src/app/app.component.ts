import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: String[] = [ 'あいうえお', 'かきくけ', 'さしす', 'たちつてと', 'な' ];

  myFilter( value: string ): boolean{
    return String(value).length < 5;
  }
}
