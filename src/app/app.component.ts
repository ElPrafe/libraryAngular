import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'library';
  year = 2022;
  constructor(){

  }
  ngOnInit():void{
    let year =2024;    
  }
}
