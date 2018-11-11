import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = { mail: 'init' };
  title = 'form';

  show() {
    console.log('メールアドレス:' + this.user.mail );
  }
}
