import { Component } from '@angular/core';
import { Book } from './Book';
import { EventType } from '@angular/router';
import { BookCartService } from '../book-cart.service';



@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})

export class BookListComponent{  
  constructor(private cart : BookCartService){
    
  }
  books:Book[] = [
    {
    name : "Libro1",
    autor: "Autor1",
    descripcion : "Desc1",
    /*fecha: new Date("2001-1-10"),*/
    precio:100,
    stock:3,
    img : "assets/img/libro.jpg",
    quantity:0,
  },
  {
    name : "Libro2",
    autor: "Autor2",
    descripcion : "Desc2",
    precio:200,
    stock:5,
    img : "assets/img/libro.jpg",
    quantity:0,
  },
  {
    name : "Libro3",
    autor: "Autor3",
    descripcion : "Desc3",
    precio:300,
    stock:10,
    img : "assets/img/libro.jpg",
    quantity:0,
  }
]
maxReached(event:String){
  alert(event);
}
addToCart(book:Book){
  if (book.quantity>0){
    this.cart.addToCart(book);
    book.stock-=book.quantity;
    book.quantity=0;
  }
  
}
}
