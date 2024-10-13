import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { AppModule } from '../app.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-products',
  imports: [AppModule,CommonModule],
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => this.products = data)
      .catch(error => console.error('Error fetching products:', error));
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
