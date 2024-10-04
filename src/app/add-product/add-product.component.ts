import { Component } from '@angular/core';
import { ProductModel } from '../models/product';
import { ProductsService } from '../services/products.service';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

newProduct: ProductModel = <ProductModel>{}
constructor(private service: ProductsService, private router: Router){}

addProduct() {
  this.service.createProduct(this.newProduct).subscribe({
    next: res=>{
     this.router.navigate(['/products'])
    },
    error: err=>{
      alert("Can not add new product")
      console.log(err)
    }
  })
  }
}

