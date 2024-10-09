import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { CardStateService } from '../services/cart-state.service';
import { ProductModel } from '../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, MatIconModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] ,
})
export class HeaderComponent implements OnInit {
  products: ProductModel[] = [];
  count: number = 0;

  constructor(private router: Router, private cartStateService: CardStateService) {}

  ngOnInit() {
    this.cartStateService.products$.subscribe((products: ProductModel[]) => {
      this.count = products.length; 
    });
  }

  goToCart() {
    this.router.navigate(['/cart']);
  } 
}
