import { Component, OnInit, } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  clearCart() {
    this.cartItems = this.cartService.clearCart();
    alert('Cart cleared!');
  }
}
