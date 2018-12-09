import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  appConfig = {
    "version": "3.2.0"
  };
  constructor() { }
}
