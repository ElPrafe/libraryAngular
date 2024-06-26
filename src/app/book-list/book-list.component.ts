import { Component } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  book = {
    name : "Libro1",
    autor: "Autor1",
    descripcion : "Desc1",
    fecha:"fecha1",
    img : "assets/img/libro.jpg"
  }
}
