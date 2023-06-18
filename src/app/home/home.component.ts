import { Component } from '@angular/core';
import { BooksService } from '../books.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';
export interface Book {
  id: string;
  name: string;
  author: string;
  category: string;
  poster: string;
  rating:number;
  publicationdate: string;
  status: string;
  description: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  addBookForm = this.fb.group({
    name: ['', Validators.required],
  });
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private bookService: BooksService,
    private router: Router
  ) {}
  addBookForms = this.fb.group({
    name: ['', Validators.required],
  });
  bookList$: any;
  trackByFn(index: any, bk: any) {
    return bk.id;
  }

  books: any;
  searchForm = this.fb.group({
    searchField: [''],
  });

  get searchField() {
    return this.searchForm.get('Search');
  }
  ngOnInit() {
    this.bookList$ = this.bookService.getBook();

    this.searchForm
      .get('searchField')
      ?.valueChanges.pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((val) => this.search(val as string))
      )

      .subscribe((value: any) => {
        this.books = value;
      });
  }

  search(bookname: string) {
    if (!bookname || bookname.trim() === '') {
      return this.http.get('https://648bf9078620b8bae7ebfae8.mockapi.io/books');
    } else {
      return this.http.get(
        `https://648bf9078620b8bae7ebfae8.mockapi.io/books?name=${bookname}`
      );
    }
  }
  searchbook(id: string) {
    return this.http
      .get<Book>(`https://648bf9078620b8bae7ebfae8.mockapi.io/books/${id}`)
      .pipe(catchError((err) => []));
  }

  delgetBook(id: string) {
    this.bookList$ = this.bookService.delgetBook(id);
  }
}
