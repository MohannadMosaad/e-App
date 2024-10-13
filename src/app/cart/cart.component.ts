import { Component, OnInit } from '@angular/core';
import { TruncatePipe } from '../truncate.pipe';
import { CommonModule } from '@angular/common';
import { ProductModel } from '../models/product';
import { CardStateService } from '../services/cart-state.service';
@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [TruncatePipe , CommonModule], 
})
export class CartComponent implements OnInit {
addProductToCart(_t3: ProductModel) {
throw new Error('Method not implemented.');
}
  cartItems: ProductModel[] = []; 

  constructor(private cartStateService: CardStateService) { }

  ngOnInit() {
    this.cartStateService.products$.subscribe((products: ProductModel[]) => {
      this.cartItems = products; 
    });
  }

  clearCart() {
    this.cartStateService.clearCart();
    alert('Cart cleared!');
  }

  isCartEmpty(): boolean {
    return this.cartItems.length === 0;
  }
}