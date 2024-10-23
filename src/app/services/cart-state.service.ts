import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardStateService {
  private productsSubject = new BehaviorSubject<ProductModel[]>([]);
  products$ = this.productsSubject.asObservable();

  addProduct(product: ProductModel){
    let currentProducts = this.productsSubject.value;
    if(currentProducts.indexOf(product) < 0){
    currentProducts.push(product)
    }
    this.productsSubject.next(currentProducts)
  }


  removeProduct(product: ProductModel) {
    let currentProducts = this.productsSubject.value;
    let index = currentProducts.findIndex(p => p.id === product.id); 
    if (index >= 0) {
      currentProducts.splice(index, 1);
      this.productsSubject.next(currentProducts);
    }
  }
  

  isExist(product: ProductModel): boolean {
    let currentProducts = this.productsSubject.value;
    return currentProducts.indexOf(product) >= 0;
  }

  clearCart() {
    this.productsSubject.next([]); 
  }
}
