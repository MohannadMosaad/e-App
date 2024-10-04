import { Component } from '@angular/core';
import { ProductModel } from '../models/product';
import { ProductsService } from '../services/products.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
[x: string]: any;

newProduct: ProductModel = <ProductModel>{}
constructor(private service: ProductsService, private router: Router){}


addProduct(productForm: NgForm) {
  if(productForm.invalid){
    alert("complete requried Data")
    return 
  }
  this.service.createProduct(this.newProduct).subscribe({
    next: res=>{
     this.router.navigate(['/admin'])
    },
    error: err=>{
      alert("Can not add new product")
      console.log(err)
    }
  })
  }
}
