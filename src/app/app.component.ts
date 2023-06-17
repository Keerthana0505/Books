import { Component } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public router: Router, public route: ActivatedRoute) {}
  title = 'books';

  mybook() {
    this.router.navigate([`/booklist`]);
  }
  addbook() {
    this.router.navigate(['/add']);
  }
  mybooksearch() {
    this.router.navigate(['/search']);
  }
  gohome() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
    this.router.navigate(['/home']);
  }
}
