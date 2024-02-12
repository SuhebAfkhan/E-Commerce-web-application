import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../Service/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss'
})
export class UserLoginComponent {
  loginObj: any = {
    userName: '',
    password: ''
  };
  constructor(private router: Router,private loginSrv: ProductService ){}

  onLogin() {
    this.loginSrv.check_user_Login(this.loginObj).subscribe((res:any)=>{
      debugger;
      if(res) {
        alert("Login Success");
        this.router.navigateByUrl('/Allproducts')
      } else {
        alert("Login Failed")
      }
    })
  }

  onLogOut() {
    const isConfirm = confirm('Are you sure that you wan to log out?');
    if (isConfirm) {
      this.loginObj = {};
      sessionStorage.removeItem('bigBasket_user');
    }
  }
}
