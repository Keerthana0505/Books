import { Component } from '@angular/core';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';
import { Book } from '../home/home.component';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  constructor(
    private fb: FormBuilder,
    private booksService: BooksService,
    private router: Router
  ) {}
  addBookForm = this.fb.group({
    name: ['', Validators.required],
    author: ['', [Validators.required]],
    poster: ['', [Validators.required, Validators.pattern('^(http|https).*')]],
    publisheddate: ['', [Validators.required]],
    status: ['', [Validators.required]],
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
  get publisheddate() {
    return this.addBookForm.get('publisheddate');
  }
  get status() {
    return this.addBookForm.get('status');
  }
  onSubmit(){
    if (this.addBookForm.valid) {
      const newBook = this.addBookForm.value;
      this.booksService.addBook(newBook as any).subscribe(() => {
        this.router.navigate(['/home']);
      });
    }
  }
}
