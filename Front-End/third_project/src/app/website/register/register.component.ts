import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../Service/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerObj: any = {
    name:'',
    userName: '',
    password: ''
  };
  constructor(private router: Router,private userService: ProductService ){}
  
  registerUser() {
    
    if (!this.registerObj.name.trim()) {
      alert('Users name cannot be empty');
      return;
    }
    if (!this.registerObj.email.trim()) {
      alert('Users Email cannot be empty');
      return;
    }
    if (!this.registerObj.password.trim()) {
      alert('Users Password cannot be empty');
      return;
    }
  
    
    if(this.registerObj.name.trim()&&this.registerObj.email.trim()&&this.registerObj.password.trim())
      {this.userService.registerUser(this.registerObj).subscribe((res:any)=>{
        if(res) {
        alert("User Register Successfully!");
        this.router.navigateByUrl('/loginUser')
      } else {
        alert("User Register Failed!")
      }
    })
    return;
    }
}
}