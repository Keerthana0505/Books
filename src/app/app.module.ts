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
import { BookDetailsComponent } from './book-details/book-details.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {NgIf} from '@angular/common';
import { SearchComponent } from './search/search.component';
import { DatePipe } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';







const routes: Routes = [
  
  { path: 'booklist', component: HomeComponent },
  {path:'books',component:BookCardComponent},
  {path:'books/:id',component:BookDetailsComponent},
  { path: 'books/edit/:id', component: EditBookComponent },
  {path:'add',component:AddBookComponent},
  {path:'search',component:SearchComponent},
  {path:'home',component:HomePageComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookCardComponent,
    AddBookComponent,
    BookDetailsComponent,
    EditBookComponent,
    SearchComponent,
    HomePageComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule,RouterModule.forRoot(routes),
    MatButtonModule,MatIconModule,MatToolbarModule, BrowserAnimationsModule,MatInputModule,MatFormFieldModule,NgIf,
    MatDatepickerModule,MatNativeDateModule,MatSelectModule

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule { }
