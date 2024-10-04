import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ProductModel } from '../models/product';
import { TableModule } from 'primeng/table';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-products',
  standalone: true,
  imports: [TableModule, RouterModule],
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.css'
})
export class ViewProductsComponent implements OnInit {

products: ProductModel[] = []

  constructor(private service: ProductsService){}

  ngOnInit(): void {
    this.service.getAll()
    .subscribe({
      next: res=>{
        this.products = [...res];
      },
      error: err=>{
        console.log(err)
        alert(err.error)
      },
      complete:()=>{}
    })
  }

}


