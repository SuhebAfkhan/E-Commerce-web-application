import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private HttpClient:HttpClient) { }
  getProducts(){
    return this.HttpClient.get('http://localhost:8080/getAllProducts');
  }
  getProductsByCategory(id:number){
    return this.HttpClient.get('http://localhost:8080/GetAllProductsByCategoryId/'+id);
  }
  saveProduct(obj: any){
    return this.HttpClient.post('http://localhost:8080/createProduct',obj);
  }
  deleteProduct(id: any){
    return this.HttpClient.delete('http://localhost:8080/deleteProductById/'+id);
  }
  updateProduct(obj:any){
    return this.HttpClient.post('http://localhost:8080/updateProduct',obj);
  }
  addToCart(obj: any) {
    return this.HttpClient.post('http://localhost:8080/addToCart',obj);
  }
  getCategory(){
    return this.HttpClient.get('http://localhost:8080/getAllCategory')
  }
  saveCategory(obj:any){
    return this.HttpClient.post('http://localhost:8080/createCategory',obj);
  }
  deleteCategory(id:any){
    return this.HttpClient.delete('http://localhost:8080/deleteCategoryById/'+id);
  }

  check_user_Login(obj: any) {
    return this.HttpClient.post('http://localhost:8080/check_user', obj);
  }

  registerUser(obj: any) {
    return this.HttpClient.post('http://localhost:8080/registerUser',obj);
  }
}
