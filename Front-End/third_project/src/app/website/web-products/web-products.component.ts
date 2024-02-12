import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../../Service/product.service';
import { FormsModule } from '@angular/forms';
// import { Ng2SearchPipeModule} from 'ng2-search-filter';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-web-products',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './web-products.component.html',
  styleUrl: './web-products.component.scss'
})
export class WebProductsComponent {
  productList: any=[];
  categoryList: any=[];
  loggedInObj: any = {};

  constructor(private prodSrv: ProductService, private router: Router) {
    // const localData = localStorage.getItem('bigBasket_user');
    // if (localData !== null) {
    //   const parseObj = JSON.parse(localData);
    //   this.loggedInObj = parseObj;
    // }
  }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategory();
  }

  navigateToPRoducts(id: number) {
    this.router.navigate(['/products', id]);
  }

  // addToCart(productId: number) {
  //   const addToCartObj = {
  //     "CartId": 0,
  //     "CustId": this.loggedInObj.custId,
  //     "ProductId": productId,
  //     "Quantity": 0,
  //     "AddedDate": new Date()
  //   };
  //   this.prodSrv.addToCart(addToCartObj).subscribe((res: any) => {
  //     if (res.result) {
  //       alert("Product Added to cart");
  //       this.prodSrv.cartUpdated$.next(true);
  //     } else {
  //       alert(res.message)
  //     }
  //   });
  // }

  getAllProducts() {
    this.prodSrv.getProducts().subscribe((response)=>{this.productList=response});
  }

  getAllCategory() {
    this.prodSrv.getCategory().subscribe((response)=>{this.categoryList=response});
  }
}
