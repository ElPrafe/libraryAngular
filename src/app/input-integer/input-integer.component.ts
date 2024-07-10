import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../book-list/Book';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})




export class InputIntegerComponent {
  @Input() quantity : number=0;
  @Input() max : number =100;
  @Input() maxReached : Boolean =false;
  @Output()
  quantityChange: EventEmitter<number>=new EventEmitter<number>;
  @Output()
  maxReachedChange: EventEmitter<Boolean>=new EventEmitter<Boolean>;
  upQuantity(){
    if (this.max>this.quantity){
      this.quantity++;
      this.quantityChange.emit(this.quantity);    
    }else{
      this.maxReachedChange.emit(true);
  }
  }
  downQuantity(){
    if (this.quantity>0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }
  onChangeQuantity(event:KeyboardEvent){
    let inputElement = event.target as HTMLInputElement;
    if(event.key>='0'&& event.key<='9'){
      console.log(event.key);    
      if (+inputElement.value>this.max){
        inputElement.value = this.max.toString();
        this.quantity = this.max;        
      }
      this.quantityChange.emit(this.quantity);
    }else{
      inputElement.value = inputElement.value.slice(0, -1);
    }
  }
}
