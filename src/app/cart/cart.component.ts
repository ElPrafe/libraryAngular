import { Component } from '@angular/core';
import { BookCartService } from '../book-cart.service';
import { Book } from '../book-list/Book';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartList$: Observable<Book[]>;
  total$ : Observable<number>;
  constructor(private cart : BookCartService){
    this.cartList$ = cart.cartlist.asObservable();    
    this.total$ = cart.total.asObservable();
  }
}
