import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../Service/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.scss'
})
export class CategoryProductsComponent {
  activeCategoryId: number = 0;
  products: any=[];

  constructor(private activatedRoute: ActivatedRoute,private prdoSrv: ProductService) {
    this.activatedRoute.params.subscribe((res:any) => {
      this.activeCategoryId =  res.id;
      this.loadProducts();
    })
  }
  loadProducts(){
    this.prdoSrv.getProductsByCategory(this.activeCategoryId).subscribe((response)=>{this.products=response})
  }
}