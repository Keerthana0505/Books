import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  countries:any
  constructor(private http: HttpClient, private fb: FormBuilder) {
  }

  searchForm=this.fb.group({

    searchField:[''],

  });

  ngOnInit()

  {

     this.searchForm.get('searchField')?.valueChanges.pipe(debounceTime(500),
     distinctUntilChanged(),switchMap((val)=>this.search(val as string)))

     .subscribe((value:any)=>{this.countries=value;});

  }
  search(region: string)
  {

    return this.http.get(`https://restcountries.com/v3.1/region/${region}`)

  }


}
