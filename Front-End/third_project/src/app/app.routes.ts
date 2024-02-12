import { Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { ProductsComponent } from './admin/products/products.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { LandingComponent } from './website/landing/landing.component';
import { WebProductsComponent } from './website/web-products/web-products.component';
import { CategoryProductsComponent } from './website/category-products/category-products.component';
import { RegisterComponent } from './website/register/register.component';
import { UserLoginComponent } from './website/user-login/user-login.component';

export const routes: Routes = [

    
    {
        path:'',
        redirectTo:'Allproducts',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:LandingComponent,
        children: [
            {
                path:'Allproducts',
                component:WebProductsComponent,
                title:'All-Products'
            },
            {
                path:'products/:id',
                component:CategoryProductsComponent
            }        
        ]
    },
    {
        path:'registerUser',
        component:RegisterComponent
    },
    {
        path:'loginUser',
        component:UserLoginComponent
    },
    {
        path:'',
        component:LayoutComponent,
        children: [
            {
                path:'products',
                component: ProductsComponent
            },
            {
                path:'category',
                component: CategoriesComponent
            }
        ]
    }
];
