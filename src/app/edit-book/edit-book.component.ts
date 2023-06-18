import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../books.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
})
export class EditBookComponent {
  constructor(
    private fb: FormBuilder,
    private booksService: BooksService,
    private router: Router,
    private datepipe: DatePipe,
    private route: ActivatedRoute
  ) {}
  publicationdateControl: any;
  selected: string | undefined ;
  select: string | undefined ;
  addBookForm = this.fb.group({
    id: '',
    name: ['', [Validators.required]],
    author: ['', [Validators.required]],
    category: ['', [Validators.required]],
    poster: ['', [Validators.required, Validators.pattern('^(http|https).*')]],
    publicationdate: ['', [Validators.required]],
    status: ['', [Validators.required]],
    rating: ['', [Validators.required, Validators.min(1),Validators.max(10)]],
    description:['', [Validators.required, Validators.minLength(20)]]
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
  get rating() {
    return this.addBookForm.get('rating');
  }
  ngOnInit() {
    this.route.paramMap.subscribe((route) => {
      const bookId = route.get('id');
      this.booksService.getbookById(bookId as string).subscribe((data) => {
        const book = data as any;
        const publicationDate = new Date(book.publicationdate); // Convert the date string to a Date object
        book.publicationdate = publicationDate;
        this.addBookForm.patchValue(book);
      });
    });
  }

  onSubmit() {
    if (this.addBookForm.valid) {
      const newBook = this.addBookForm.value;
      const dateToSave = this.datepipe.transform(
        newBook.publicationdate,
        'MM/dd/yyyy'
      );
      newBook.publicationdate = dateToSave;

      const updatedBook = this.addBookForm.value;
      this.booksService.updateBook(updatedBook as any).subscribe(() => {
        this.router.navigate(['/booklist']);
      });
    }
  }
}
