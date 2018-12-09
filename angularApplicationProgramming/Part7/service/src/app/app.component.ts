import { Component } from '@angular/core';

import { BookService } from './service/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service';
  _bookService : BookService;
  version: String;

  constructor( private bookService: BookService ) { 
  }

  ngOnInit() {
    this._bookService = this.bookService;
    this.version = this._bookService.appConfig.version;
  }
}
