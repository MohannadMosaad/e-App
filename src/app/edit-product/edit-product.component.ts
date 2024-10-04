import { Component, Input } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ProductModel } from '../models/product';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {

  product: ProductModel = <ProductModel>{};

  productFrom = new FormGroup({
    productName: new FormControl('',[Validators.required, Validators.minLength(4)]),
    productPrice: new FormControl('', [Validators.required, Validators.min(10)])
  })

  constructor(private service:ProductsService, private router: Router){}

  @Input()
  set id(productId: number){
    this.service.getProductById(productId)
    .subscribe({
      next: res =>{
        this.product = res;
        this.productFrom.controls.productName.setValue(this.product.name);
        this.productFrom.controls.productPrice.setValue(`${this.product.price}`);
      },
      error: err=> console.log(err)
    })
  }

  saveChanges() {
    if(this.productFrom.invalid){
      alert("complete required data")
      return
    }
    let requestBody = {
      name : this.productFrom.controls.productName.getRawValue(),
      price : this.productFrom.controls.productPrice.getRawValue(),
    }

    this.service.editProduct(this.product.id, requestBody)
    .subscribe({
      next: res=> this.router.navigate(['/admin']),
      error: err=> alert(err.message)
    })
    }
    
}