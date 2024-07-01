import { Component } from '@angular/core';
import { Book } from './Book';
import { EventType } from '@angular/router';



@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent{  
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
upQuantity(book:Book){
  if (book.stock>book.quantity){
  book.quantity++;
}
}
downQuantity(book:Book){
  if (book.quantity>0){
    book.quantity--
  }
}
onChangeQuantity(event:KeyboardEvent, book:Book){
  let inputElement = event.target as HTMLInputElement;
  if(event.key>='0'&& event.key<='9'){
    console.log(event.key);    
    if (+inputElement.value>book.stock){
      inputElement.value = book.stock.toString();
      book.quantity = book.stock;
    }
  }else{
    inputElement.value = inputElement.value.slice(0, -1);
  }
}
}
