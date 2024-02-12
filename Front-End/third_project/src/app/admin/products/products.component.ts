import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ProductService } from '../../Service/product.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule,HttpClientModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  isSidePanelVisible: boolean= false;
  productObj: any = {
    "productId": 0,
    "productSku": "",
    "productName": "",
    "productPrice": 0,
    "productShortName": "",
    "productDescription": "",
    "createdDate": new Date(),
    "deliveryTimeSpan": "",
    "categoryId": 0,
    "productImageUrl": ""
  };
  categoryList: any [] = [];
  productsList: any [] = [];
  apiCategory:any=[];
  apiData:any=[];
  constructor(private service:ProductService) {}

  ngOnInit():void{
    this.getApiCategory();
    this.getApiData();
  }

  getApiData(){
    this.service.getProducts().subscribe((response)=>{this.apiData=response})
  }
  getApiCategory(){
    this.service.getCategory().subscribe((response)=>{this.apiCategory=response})
  }

  onSave() {
    if (!this.productObj.productName.trim()) {
      alert('Product name cannot be empty');
      return;
    }
    if (!isNaN(Number(this.productObj.productName))) {
      alert('Product name cannot contain numbers');
      return;
    }
  
    if (!this.productObj.productShortName.trim()) {
      alert('Product short name cannot be empty');
      return;
    }
  
    if (!this.productObj.productPrice) {
      alert('Product price cannot be empty');
      return;
    }

    if (isNaN(this.productObj.productPrice)) {
      alert('Product price must be a valid number');
      return;
    }
  
    if (!this.productObj.categoryId) {
      alert('Category is required');
      return;
    }
  
    if (!this.productObj.deliveryTimeSpan.trim()) {
      alert('Delivery time span cannot be empty');
      return;
    }
  
    if (!this.productObj.productImageUrl.trim()) {
      alert('Product image URL cannot be empty');
      return;
    }
  
    if (!this.productObj.productDescription.trim()) {
      alert('Product description cannot be empty');
      return;
    }
    this.service.saveProduct(this.productObj).subscribe((res:any)=>{
      debugger;
      if(res) {
        alert("Product Created");
        this.getApiData();
      } else {
        alert(res.message)
      }
    })
  }
  
  onUpdate() {
     if (!this.productObj.productName.trim()) {
      alert('Product name cannot be empty');
      return;
    }
    if (!isNaN(Number(this.productObj.productName))) {
      alert('Product name cannot contain numbers');
      return;
    }
  
    if (!this.productObj.productShortName.trim()) {
      alert('Product short name cannot be empty');
      return;
    }
  
    if (!this.productObj.productPrice) {
      alert('Product price cannot be empty');
      return;
    }

    if (isNaN(this.productObj.productPrice)) {
      alert('Product price must be a valid number');
      return;
    }
  
    if (!this.productObj.categoryId) {
      alert('Category is required');
      return;
    }
  
    if (!this.productObj.deliveryTimeSpan.trim()) {
      alert('Delivery time span cannot be empty');
      return;
    }
  
    if (!this.productObj.productImageUrl.trim()) {
      alert('Product image URL cannot be empty');
      return;
    }
  
    if (!this.productObj.productDescription.trim()) {
      alert('Product description cannot be empty');
      return;
    }
    this.service.saveProduct(this.productObj).subscribe((res:any)=>{
      debugger;
      if(res) {
        alert("Product Updated");
        this.getApiData();
      } else {
        alert(res.message)
      }
    })
  }

  onDelete(item: any) {
    const isDelete = confirm('Are you Sure want to delte');
    if(isDelete) {
      this.service.deleteProduct(item.productId).subscribe((res:any)=>{
        if(res) {
          alert("Product Deleted");
          this.getApiData();
        } else {
          alert(res.message)
        }
      })
    }
  }

  

  // constructor(private productSrv: ProductService) {
    
  // }
  
    
  // }
  // getProducts() {
  //   this.productSrv.getProducts().subscribe((res:any)=>{
  //     this.productsList = res.data;
  //   })
  // }

  

  // onSave() {
  //   this.productSrv.saveProduct(this.productObj).subscribe((res:any)=>{
  //     debugger;
  //     if(res.result) {
  //       alert("Product Updated");
  //       this.getProducts();
  //     } else {
  //       alert(res.message)
  //     }
  //   })
  // }
  

  onEdit(item: any) {
    this.productObj = item;
    this.openSidePanel();
  }


  openSidePanel() {
    this.isSidePanelVisible = true;
  }

  closeSidePanel() {
    this.isSidePanelVisible = false;
  }
}
