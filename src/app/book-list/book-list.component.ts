import { Component } from '@angular/core';
import { Book } from './Book';
import { EventType } from '@angular/router';
import { BookCartService } from '../book-cart.service';
import { BookDataService } from '../book-data.service';



@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})

export class BookListComponent {
  constructor(private cart: BookCartService, private booksDataService: BookDataService) {

  }
  books: Book[] = [];
  ngOnInit(): void {
    this.booksDataService.getAll().subscribe(books => this.books = books);
  }

  addToCart(book: Book) {
    if (book.quantity > 0) {
      this.cart.addToCart(book);
      book.stock -= book.quantity;
      book.quantity = 0;
    }

  }
}
