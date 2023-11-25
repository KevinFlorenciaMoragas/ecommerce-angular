import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  listAllProducts(): Observable<any> {
    let url: string = 'https://fakestoreapi.com/products'
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.log(err);
        return throwError(err);
      }
      )
    );
  }

  getProductById(id: number): Observable<any> {
    let url: string = 'https://fakestoreapi.com/products/' + id;
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.log(err);
        return throwError(err);
      })
    );
  }

}
