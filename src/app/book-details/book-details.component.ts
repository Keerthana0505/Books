import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../home/home.component';
import { BooksService } from '../books.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent {
  book: any;
  @Output() delete = new EventEmitter<string>();
  movieList$: any;

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}
  show = true;
  toggleDescription() {
    this.show = !this.show;
  }
  delbook(id: string) {
    this.delete.emit(id);
  }

  goToEdit(id: string) {
    this.router.navigate([`/books/edit/${id}`]);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((route) => {
      const bookId = route.get('id');
      this.booksService.getbookById(bookId as string).subscribe((data) => {
        this.book = data;
      });
    });
  }
}
