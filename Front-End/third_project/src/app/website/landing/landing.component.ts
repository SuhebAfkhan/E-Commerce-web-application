import { CommonModule } from '@angular/common';
import { Component ,OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductService } from '../../Service/product.service';
import { Router, RouterLink, RouterOutlet} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,RouterLink,RouterOutlet],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {
  @ViewChild('loginFrm') loginFrm!: NgForm;
  @ViewChild('registerFrm') registerFrm!: NgForm;
  term:any;
  productList: any=[];
  categoryList: any=[];
  cartList: any[] = [];
  // loginObj: loginObject = new loginObject();
  // registerObj: registerObject = new registerObject();
  loggedInObj: any = {};
  showLoginPassword: boolean = false;
  showRegisterPassword: boolean = false;
  isApiCallInProgress: boolean = false;
  phonePattern: string = "^((\\+91-?)|0)?[0-9]{10}$";
  passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;

  constructor(private prodSrv: ProductService, private router: Router,private loginSrv: ProductService) {
    // const localData = localStorage.getItem('bigBasket_user');
    // if (localData !== null) {
    //   const parseObj = JSON.parse(localData);
    //   this.loggedInObj = parseObj;
    //   this.getCartByCustomerId(this.loggedInObj.custId);
    // }
    // this.prodSrv.cartUpdated$.subscribe((res: any) => {
    //   if (res) {
    //     this.getCartByCustomerId(this.loggedInObj.custId);
    //   }
    // })
  }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategory();
  }

  navigateToProducts(id: number) {
    this.router.navigate(['/products', id]);
  }

  // remove(cartId: number) {
  //   this.prodSrv.removeProductByCartId(cartId).subscribe((res: any) => {
  //     this.getCartByCustomerId(this.loggedInObj.custId);
  //   });
  // }

  // getCartByCustomerId(custId: number) {
  //   this.prodSrv.getCartDataByCustId(custId).subscribe((res: any) => {
  //     this.cartList = res.data;
  //   });
  // }

  getAllProducts() {
    this.prodSrv.getProducts().subscribe((response)=>{this.productList=response});
  }

  getAllCategory() {
    this.prodSrv.getCategory().subscribe((response)=>{this.categoryList=response});
  }

  // openLoginModal() {
  //   const notNull = document.getElementById('loginModal');
  //   if (notNull != null) {
  //     notNull.style.display = 'block';
  //   }
  //   this.loginFrm.resetForm();
  // }

  // closeLoginModal() {
  //   const modal = document.getElementById('loginModal');
  //   if (modal) {
  //     modal.classList.remove('show');
  //     modal.style.display = 'none';
  //     const modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
  //     if (modalBackdrop) {
  //       document.body.removeChild(modalBackdrop);
  //     }
  //     document.body.classList.remove('modal-open');
  //   }
  //   this.resetLoginModal();
  // }

  // openRegisterModal() {
  //   const notNull = document.getElementById('registerModal');
  //   if (notNull != null) {
  //     notNull.style.display = 'block';
  //   }
  //   this.registerFrm.resetForm();
  // }

  // closeRegisterModal() {
  //   const modal = document.getElementById('registerModal');
  //   if (modal) {
  //     modal.classList.remove('show');
  //     modal.style.display = 'none';
  //     const modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
  //     if (modalBackdrop) {
  //       document.body.removeChild(modalBackdrop);
  //     }
  //     document.body.classList.remove('modal-open');
  //   }
  //   this.resetRegisterModal();
  // }

  // register(registerFrm: NgForm) {
  //   if (registerFrm.valid) {
  //     if (!this.isApiCallInProgress) {
  //       this.isApiCallInProgress = true;
  //       this.loginSrv.registerCustomer(this.registerObj).subscribe((res: any) => {
  //         if (res.result) {
  //           this.isApiCallInProgress = false;
  //           this.loggedInObj = res.data;
  //           alert(res.message);
  //           this.closeRegisterModal()
  //         } else {
  //           this.isApiCallInProgress = false;
  //         }
  //       }, (err: any) => {
  //         this.isApiCallInProgress = false;
  //       });
  //     }
  //   } else {
  //     Object.values(registerFrm.controls).forEach(control => {
  //       control.markAsTouched();
  //     });
  //   }

  // }

  // login(loginFrm: NgForm) {
  //   if (loginFrm.valid) {
  //     if (!this.isApiCallInProgress) {
  //       this.isApiCallInProgress = true;
  //       this.loginSrv.login(this.loginObj).subscribe((res: any) => {
  //         if (res.result) {
  //           this.isApiCallInProgress = false;
  //           this.loggedInObj = res.data;
  //           alert(res.message);
  //           localStorage.setItem('bigBasket_user', JSON.stringify(res.data));
  //           this.closeLoginModal();
  //           // this.getCartByCustomerId(this.loggedInObj.custId);
  //         } else {
  //           this.isApiCallInProgress = false;
  //         }
  //       }, (err: any) => {
  //         this.isApiCallInProgress = false;
  //       });
  //     }
  //   } else {
  //     Object.values(loginFrm.controls).forEach(control => {
  //       control.markAsTouched();
  //     });
  //   }
  // }

  // resetLoginModal() {
  //   this.loginObj = new loginObject();
  // }

  // resetRegisterModal() {
  //   this.registerObj = new registerObject();
  // }

  // onLogOut() {
  //   const isConfirm = confirm('Are you sure that you wan to log out?');
  //   if (isConfirm) {
  //     localStorage.removeItem('bigBasket_user');
  //     this.loggedInObj = {};
  //     this.router.navigateByUrl('Allproducts');
  //     alert('Logged Out Successfully!!');
  //   }
  // }

  // onEyeClick() {
  //   this.showLoginPassword = !this.showLoginPassword;
  // }

  // onRegisterEyeClick() {
  //   this.showRegisterPassword = !this.showRegisterPassword;
  // }

  // calculateTotalSubtotal() {
  //   let totalSubtotal = 0;
  //   for (const item of this.cartList) {
  //     totalSubtotal += item.productPrice;
  //   }
  //   return totalSubtotal;
  // }
}

// export class loginObject {
//   UserName: string;
//   UserPassword: string;

//   constructor() {
//     this.UserName = '';
//     this.UserPassword = '';
//   }
// }
// export class registerObject {
//   custId: number;
//   name: string;
//   mobileNo: string;
//   password: string;

//   constructor() {
//     this.custId = 0;
//     this.name = '';
//     this.mobileNo = '';
//     this.password = '';
//   }
// }
// export class userProfileObject {
//   custId: number;
//   name: string;
//   mobileNo: string;
//   password: string;

//   constructor() {
//     this.custId = 0;
//     this.name = '';
//     this.mobileNo = '';
//     this.password = '';
//   }
// }
