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

export class BookListComponent{  
  constructor(private cart : BookCartService, private booksDataService:BookDataService){
    
  }
  books:Book[]=[];
  ngOnInit():void{
    this.booksDataService.getAll().subscribe(books=>this.books = books);
  }
  /*books:Book[] = [
    {
    name : "Libro1",
    author: "Autor1",
    description : "Desc1",    
    price:100,
    stock:3,
    img : "assets/img/libro.jpg",
    quantity:0,
  },
  {
    name : "Libro2",
    author: "Autor2",
    description : "Desc2",
    price:200,
    stock:5,
    img : "assets/img/libro.jpg",
    quantity:0,
  },
  {
    name : "Libro3",
    author: "Autor3",
    description : "Desc3",
    price:300,
    stock:10,
    img : "assets/img/libro.jpg",
    quantity:0,
  }
]*/

addToCart(book:Book){
  if (book.quantity>0){
    this.cart.addToCart(book);
    book.stock-=book.quantity;
    book.quantity=0;
  }
  
}
}
