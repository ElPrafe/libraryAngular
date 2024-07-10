import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { FormsModule } from '@angular/forms';
import { LibraryBooksComponent } from './library-books/library-books.component';
import { LibraryAboutComponent } from './library-about/library-about.component';
import { CartComponent } from './cart/cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { provideHttpClient } from '@angular/common/http';
import { FormContactComponent } from './form-contact/form-contact.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { LogosPaymentComponent } from './logos-payment/logos-payment.component';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    LibraryBooksComponent,
    LibraryAboutComponent,
    CartComponent,
    InputIntegerComponent,
    FormContactComponent,
    ContactInfoComponent,
    LogosPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
