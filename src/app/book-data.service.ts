import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Book } from './book-list/Book';

const URL = "https://668c3b850b61b8d23b0cdc4a.mockapi.io/api/v1/Books"
@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Book[]>{
    return this.http.get<Book[]>(URL).pipe(
                      tap((books: Book[])=> books.forEach(book=>{
                        book.quantity = 0;
                        book.maxReached = false;
                      }))
    );
  }
}
