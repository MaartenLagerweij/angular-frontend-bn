import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; 
import { ProductsComponent } from './products/products.component';


export const routes: Routes = [
    { path: 'login', loadComponent: () => LoginComponent },
    { path: 'products', loadComponent: () => ProductsComponent },
];
