import { Injectable } from '@angular/core';
import { Book } from './book-list/Book';

@Injectable({
  providedIn: 'root'
})
export class BookCartService {  
  cartList: Book[] = [];  
  constructor() { }
  addToCart(book : Book){    
    let item: Book | undefined = this.cartList.find((v1)=> v1.name == book.name);
    if (item){
      item.quantity+= book.quantity;
    }else{
      this.cartList.push(book);      
    }   
    console.log(this.cartList);

  }
}
