import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookCardComponent } from './book-card/book-card.component';
import { AddBookComponent } from './add-book/add-book.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { EditBookComponent } from './edit-book/edit-book.component';


const routes: Routes = [
  
  { path: 'home', component: HomeComponent },
  {path:'books',component:BookCardComponent},
  {path:'books/:id',component:BookDetailsComponent},
  { path: 'books/edit/:id', component: EditBookComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookCardComponent,
    AddBookComponent,
    SearchComponent,
    BookDetailsComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule,RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
