import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './add-product/add-product.component';
import { RegisterComponent } from './Register/Register.component';
import { MainLayoutComponent } from './mainLayout/mainLayout.component';

export const routes: Routes = [
{path: '', component: LoginComponent},
{path: 'layout', component: MainLayoutComponent, children:[
    {path: '', component: HomeComponent},
    {path: 'products', component: ProductsComponent},
    { path: 'about', component: AboutComponent },
    {path: 'cart', component: CartComponent},
    { path: 'contact', component: ContactComponent }, 
    {path:'add-product',component:AddProductComponent},
]},
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{path: '**', redirectTo: ''}
];
