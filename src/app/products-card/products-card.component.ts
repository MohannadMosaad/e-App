import { Component, Input, Output, EventEmitter } from '@angular/core';
export { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.css']
})
export class ProductsCardComponent {
  @Input() product: any;
  @Output() addToCartEvent = new EventEmitter<any>();

  addToCart() {
    this.addToCartEvent.emit(this.product);
  }
}
