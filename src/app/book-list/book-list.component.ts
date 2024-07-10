import { Component } from '@angular/core';
import { Book } from './Book';
import { EventType } from '@angular/router';
import { BookCartService } from '../book-cart.service';
import { BookDataService } from '../book-data.service';
import { Observable, Subscription } from 'rxjs';



@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})

export class BookListComponent {
  cartItems: Book[] = [];
  constructor(private cart: BookCartService, private booksDataService: BookDataService) {

  }
  books: Book[] = [];


  ngOnInit(): void {
    this.cart.cartlist.subscribe((cartItems: Book[]) => {
      this.cartItems = cartItems;
    });
    this.booksDataService.getAll().subscribe(books => {
      this.books = books;
      if (this.cartItems.length > 0) {
        this.cartItems.forEach(item => {
          this.books.forEach(book => {
            if (item.name == book.name) {
              book.stock -= item.quantity;
            }
          })
        });
      }
    });
  }

  addToCart(book: Book) {
    if (book.quantity > 0) {
      this.cart.addToCart(book);
      book.stock -= book.quantity;
      book.quantity = 0;
    }

  }
}
