import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ProductModel } from '../models/product';
import { TableModule } from 'primeng/table';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-products',
  standalone: true,
  imports: [TableModule, RouterModule],
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.css'
})
export class ViewProductsComponent implements OnInit {



  products: ProductModel[] = []

  constructor(private service: ProductsService, private router: Router) { }

  loadData() {
    this.service.getAll()
      .subscribe({
        next: res => {
          this.products = [...res];
        },
        error: err => {
          console.log(err)
          alert(err.error)
        },
        complete: () => { }
      })
  }
  ngOnInit(): void {
    this.loadData()
  }

  gotoEditProduct(productId: number) {
    this.router.navigate(["/edit-product", productId])
  }

  deleteProduct(productId: number) {

    let confirmed = confirm("are you sure?")
    if (confirmed) {
      this.service.deleteProduct(productId)
        .subscribe({
          next: res => this.loadData(),
          error: err => alert('can not delete product')
        })
    }
  }
}