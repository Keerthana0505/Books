import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent {
  publicationdateControl: any;
  selected: string = '';
  select: string = '';
  constructor(
    private fb: FormBuilder,
    private booksService: BooksService,
    private router: Router,
    private datepipe: DatePipe
  ) {}
  addBookForm = this.fb.group({
    name: ['', Validators.required],
    author: ['', [Validators.required]],
    category: ['', [Validators.required]],
    poster: ['', [Validators.required, Validators.pattern('^(http|https).*')]],
    publicationdate: ['', [Validators.required]],
    status: ['', [Validators.required]],
    description: ['', [Validators.required, Validators.minLength(20)]],
  });
  get name() {
    return this.addBookForm.get('name');
  }
  get author() {
    return this.addBookForm.get('author');
  }
  get poster() {
    return this.addBookForm.get('poster');
  }
  get publicationdate() {
    return this.addBookForm.get('publicationdate');
  }
  get status() {
    return this.addBookForm.get('status');
  }
  get category() {
    return this.addBookForm.get('category');
  }
  get description() {
    return this.addBookForm.get('description');
  }
  onSubmit() {
    //   const dateToSave = this.datepipe.transform(publicationdate, 'mm/dd/yyyy');

    //   if (this.addBookForm.valid) {
    //     const newBook = this.addBookForm.value;
    //     this.booksService.addBook(newBook as any).subscribe(() => {
    //       this.router.navigate(['/home']);
    //     });
    //   }
    // }
    if (this.addBookForm.valid) {
      const newBook = this.addBookForm.value;
      const dateToSave = this.datepipe.transform(
        newBook.publicationdate,
        'MM/dd/yyyy'
      );
      newBook.publicationdate = dateToSave;

      this.booksService.addBook(newBook as any).subscribe(() => {
        this.router.navigate(['/booklist']);
      });
    }
  }
}
