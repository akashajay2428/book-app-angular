import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor( private http:HttpClient) { }

  private apiUrl="http://localhost:3000/books"


  getBook():Observable<Book[]>{
    return this.http.get<Book[]>(this.apiUrl)
  }


  add(rec:Book):Observable<Book>{
    return this.http.post<Book>(this.apiUrl,rec)
  }

  update(id:string,selectedBook:Book):Observable<Book>{
    return this.http.put<Book>(`${this.apiUrl}/${id}`,selectedBook)
  }
  

  deleteBook(id:string|undefined):Observable<Book>{
    return this.http.delete<Book>(`${this.apiUrl}/${id}`)
  }


  getBookByCriteria(author?: string, price?: string): Observable<Book[]> {
    let params = new HttpParams();
    
    if (author) params = params.set("author", author);
    if (price) params = params.set("price", price);

    return this.http.get<Book[]>(this.apiUrl, { params });
  }
}
 // https://chatgpt.com/share/67dfdccd-6d34-8009-a936-ad4889248348
export interface Book{
  id?: string,
  title: string,
  author: string,
  price: string
}