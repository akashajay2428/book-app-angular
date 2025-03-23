import { Component } from '@angular/core';
import { Book, BookService } from '../../services/book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  onCancel(){
    this.editMode=false
  }

  getbook:Book[]=[]

  constructor (private service:BookService){}


  ngOnInit(){
    this.fetchBook()
  }

  fetchBook(){
    this.service.getBook().subscribe((data)=>{
      this.getbook=data
    })
  }

  newBook:Book={title:"",author:"",price:""}

  onAdd(){
    if(this.newBook.price && this.newBook.author && this.newBook.price){
    this.service.add(this.newBook).subscribe(()=>{
      this.fetchBook()
      this.newBook={title:"",author:"",price:""}
    })
  }
  } 

  editMode:boolean=false
  selectedBook:Book|null=null

  onEdit(item:Book){
    this.editMode=true
    this.selectedBook={...item}
  }

  onUpdate() {
    if (this.selectedBook && this.selectedBook.id) {
      this.service.update(this.selectedBook.id, this.selectedBook).subscribe(() => {
        this.fetchBook();
        this.selectedBook = null;
        this.editMode = false;
      });
    } else {
      console.error("Selected book or book ID is missing");
    }
  }


  delete(id:string | undefined){
    if(confirm("Do you want to delete?")){
    this.service.deleteBook(id).subscribe(()=>{
      this.fetchBook()
    })
  }
  }
  



}


