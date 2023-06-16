import { Component } from '@angular/core';
import { Book } from '../home/home.component';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../books.service';
@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {

  constructor(
    private fb: FormBuilder,
    private booksService: BooksService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe((route) => {
      const movieId = route.get('id');

      this.booksService.getbookById(movieId as string).subscribe((data) => {
        console.log(data);
        this.addBookForm.patchValue(data as any);
      });
    });
  }
 
  addBookForm = this.fb.group({
    id:'',
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
      const updatedBook = this.addBookForm.value;
      this.booksService.updateBook(updatedBook as any).subscribe(() => {
        this.router.navigate(['/books']);
      });
    }


}
}
