import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BookService } from './service/book.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ { provide: BookService, useValue: new BookService() } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
