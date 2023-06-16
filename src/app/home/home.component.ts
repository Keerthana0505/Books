import { Component } from '@angular/core';
import { BooksService } from '../books.service';
import { HttpClient } from '@angular/common/http';
export interface Book {
  id: string;
  name: string;
  author:string;
  poster: string;
  publisheddate: string;
  status:string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  constructor( private http: HttpClient,private bookService:BooksService) {}
  bookList$: any;
  trackByFn( index:any,bk:any) {
    return bk.id;
  }
    ngOnInit() {
    this.bookList$ = this.bookService.getBook();
    
    
  }
  delgetBook(id:string){
    this.bookList$=this.bookService.delgetBook(id);
  }
}
