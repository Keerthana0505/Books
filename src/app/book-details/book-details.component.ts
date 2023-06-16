import { Component } from '@angular/core';
import { Book } from '../home/home.component';
import { BooksService } from '../books.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  book: any;
  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((route) => {
      const bookId = route.get('id');
      this.booksService.getbookById(bookId as string).subscribe((data) => {
        this.book = data;
      });
    });
  }

}
