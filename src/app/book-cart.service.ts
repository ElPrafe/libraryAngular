import { Injectable } from '@angular/core';
import { Book } from './book-list/Book';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookCartService {  
  private _cartList: Book[] = []; 
  cartlist : BehaviorSubject<Book[]> = new BehaviorSubject(this._cartList);
  constructor() { }
  addToCart(book : Book){    
    let item: Book | undefined = this._cartList.find((v1)=> v1.name == book.name);
    if (item){
      item.quantity+= book.quantity;
    }else{
      this._cartList.push({... book});      
    }   
    console.log(this._cartList);
    this.cartlist.next(this._cartList); //equivale al emit de eventos
  }
}
