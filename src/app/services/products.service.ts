import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductModel } from '../models/product';
import { environment } from '../../environment/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
 

  constructor(private http: HttpClient) { }

  getAll(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${environment.ApiBaseUrl}/admin`)
  }

   
  createProduct(newProduct: ProductModel): Observable<ProductModel>{
    return this.http.post<ProductModel>(`${environment.ApiBaseUrl}/admin`, newProduct)
  }

  getProductById(productId: number) : Observable<ProductModel>{
    return this.http.get<ProductModel>(`${environment.ApiBaseUrl}/admin/${productId}`)
  }

  editProduct(productId: number, product: any): Observable<ProductModel> {
    return this.http.put<ProductModel>(`${environment.ApiBaseUrl}/admin/${productId}`, product)
  }
  
  deleteProduct(productId: number): Observable<ProductModel> {
    return this.http.delete<ProductModel>(`${environment.ApiBaseUrl}/admin/${productId}`)
  }
}