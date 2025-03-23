import { Component } from '@angular/core';
import { Book, BookService } from '../../services/book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private service:BookService){}

  books:Book[]=[]

  ngOnInit(){
    this.fetchbook()
  }

  fetchbook(){
    this.service.getBook().subscribe((data)=>{
      this.books=data
    })
  }

  onSearch(authRef: string, priceRef: string): void {
    if (!authRef && !priceRef) {
      this.fetchbook()
      return;
    }//optional

    this.service.getBookByCriteria(authRef, priceRef).subscribe((data) => {
      this.books = data;
    });
  }

  reset(author: HTMLInputElement, price: HTMLInputElement): void {
    author.value = "";
    price.value = "";
    this.fetchbook()
  }
}
