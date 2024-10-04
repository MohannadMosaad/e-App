import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductModel } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>('https://octaprimetech.com/products')
  }

   
  createProduct(newProduct: ProductModel): Observable<ProductModel>{
    return this.http.post<ProductModel>('https://octaprimetech.com/products', newProduct)
  }
}


