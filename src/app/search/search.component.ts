import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';
import { Book } from '../home/home.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  books: any;
  constructor(private http: HttpClient, private fb: FormBuilder) {}

  searchForm = this.fb.group({
    searchField: [''],
  });

  ngOnInit() {
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

  search(books: string) {
    if (!books || books.trim() === '') {
      return this.http.get('https://648bf9078620b8bae7ebfae8.mockapi.io/books');
    } else {
      return this.http.get(
        `https://648bf9078620b8bae7ebfae8.mockapi.io/books?name=${books}`
      );
    }
  }
  searchbook(id: string) {
    return this.http
      .get<Book>(`https://648bf9078620b8bae7ebfae8.mockapi.io/books/${id}`)
      .pipe(catchError((err) => []));
  }
  get searchField() {
    return this.searchForm.get('Search');
  }
}
