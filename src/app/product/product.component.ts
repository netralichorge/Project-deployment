import { Component } from '@angular/core';
import { Product, ProductService } from '../service/product.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [NgFor],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  product:Product[]=[];

  constructor(private productService:ProductService)
  {

  }

  ngOnInit()
  {
    this.productService.getProducts()
    .subscribe({
      next:(data)=>{this.product=data}
    })
  }

}
