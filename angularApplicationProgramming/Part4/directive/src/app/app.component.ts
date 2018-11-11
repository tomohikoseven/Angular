import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = [
    '子', '丑', '寅', '卯', '辰', '巳', '牛', '未', '申', '酉', '戌', '亥'
  ];

}
