import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './home/home.component';
import { catchError, concatMap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  userdata=' ';
  constructor( private http: HttpClient) {}
  getBook()
  {
    return this.http.get(
        `https://648bf9078620b8bae7ebfae8.mockapi.io/books`)
  }
  addBook(data: Book) {
    return this.http
      .post('https://648bf9078620b8bae7ebfae8.mockapi.io/books', data)
      .pipe(catchError((err) => []));
  }
  delgetBook(id:string){
    return this.deleteBook(id).pipe(concatMap(()=>this.getBook()));
  }
  deleteBook(id: string) {
   
    return this.http
      .delete(`https://648bf9078620b8bae7ebfae8.mockapi.io/books/${id}`);
   
  }
  getbookById(id: string) {
    return this.http
    .get<Book>(`https://648bf9078620b8bae7ebfae8.mockapi.io/books/${id}`)
    .pipe(catchError((err) => []));

  }
  updateBook(book: Book) {
    console.log(book)
    return this.http
      .put(
        `https://648bf9078620b8bae7ebfae8.mockapi.io/books/${book.id}`,
        book
      )
      .pipe(catchError((err) => []));
  }
}
