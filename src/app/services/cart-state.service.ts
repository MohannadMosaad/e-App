import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardStateService {
  // استخدام BehaviorSubject لتتبع المنتجات في السلة
  private productsSubject = new BehaviorSubject<ProductModel[]>([]);
  products$ = this.productsSubject.asObservable();

  // دالة لإضافة منتج
  addProduct(product: ProductModel) {
    let currentProducts = this.productsSubject.value;
    // التأكد من عدم تكرار المنتج
    if (currentProducts.indexOf(product) < 0) {
      currentProducts.push(product);
    }
    this.productsSubject.next(currentProducts); // تحديث قيمة BehaviorSubject
  }

  // دالة لإزالة منتج
  removeProduct(product: ProductModel) {
    let currentProducts = this.productsSubject.value;
    let index = currentProducts.indexOf(product);
    if (index >= 0) {
      currentProducts.splice(index, 1);
      this.productsSubject.next(currentProducts); // تحديث قيمة BehaviorSubject
    }
  }

  // دالة للتحقق من وجود المنتج
  isExist(product: ProductModel): boolean {
    let currentProducts = this.productsSubject.value;
    return currentProducts.indexOf(product) >= 0;
  }

  // دالة لمسح السلة
  clearCart() {
    // تحديث المنتجات إلى مصفوفة فارغة
    this.productsSubject.next([]); // إرسال مصفوفة فارغة للمشتركين
  }
}
