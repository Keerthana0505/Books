import { Component } from '@angular/core';
import { BooksService } from '../books.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
export interface Book {
  id: string;
  name: string;
  author:string;
  category:string;
  poster: string;
  publicationdate: string;
  status:string;
  description:string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
 
  addBookForm = this.fb.group({
    name: ['', Validators.required],
  });
  constructor( private http: HttpClient, private fb: FormBuilder,
    private bookService: BooksService,
    private router: Router) {}
    addBookForms= this.fb.group({
      name: ['', Validators.required],
    });
  bookList$: any;
  trackByFn( index:any,bk:any) {
    return bk.id;
  }
  get search() {
    return this.addBookForm.get('name');
  }
    ngOnInit() {
    this.bookList$ = this.bookService.getBook();
    
    
  }
  delgetBook(id:string){
    this.bookList$=this.bookService.delgetBook(id);
  }
  
}
