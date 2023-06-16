import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../home/home.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  constructor(private router: Router) {}
  
  @Input() book = {
    "id": "1",
    "name": "Rich Dad Poor Dad",
    "author":"Robert T. Kiyosaki and Sharon Lechte",
    "poster": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSlrQfRuyGKdvR9r_1QROkXsmnX0sV_-XeEgKk0w80lEGql4GGg",
    "publicationdate": "25-05-2020",
    "status": "Reading"
  };
  @Output() delete = new EventEmitter<string>();
  movieList$: any;

  delbook(id: string) {
    this.delete.emit(id);
  }
  goToDetails(id: string) {
    this.router.navigate([`/books/${id}`]);    
    //  this.router.navigate(['/news']) ;
  }
  goToEdit(id: string) {
    this.router.navigate([`/books/edit/${id}`]);
  }

  }

