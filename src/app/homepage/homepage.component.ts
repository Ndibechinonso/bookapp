import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {


  public books : any = [];
  constructor(public _booksService: BooksService) {
    
  }

  ngOnInit() {
    this._booksService.getBooks().subscribe(data => this.books = data)
  }


}
