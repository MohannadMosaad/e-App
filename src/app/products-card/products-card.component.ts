import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CardStateService } from '../services/cart-state.service';
import { ProductModel } from '../models/product';
export { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.css'],
  
})
export class ProductsCardComponent {
  count: number | undefined;
  cartItems: any;
  cartService: any;

  clearCart() {
    this.cartStateService.clearCart(); 
    this.count = 0; 
    this.cartStateService.clearCart();
  
  }
  
cardStateService: any;

  constructor(private cartStateService:CardStateService){}

  @Input() product: any;
  @Output() addToCartEvent = new EventEmitter<any>();

  addToCart() {
    this.addToCartEvent.emit(this.product);
  }
  addProductToCart(product: ProductModel) {
    if(this.cartStateService.isExist(product)){
      this.cartStateService.removeProduct(product)
    }else{
      this.cartStateService.addProduct(product)
    }
  }
  
}
