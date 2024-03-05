import { Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail-components/product-detail.component';
import { HomeComponentsComponent } from './home-component/home-components.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { guardGuard } from './guard/guard.guard';
import { LoginComponent } from './admin/login/login.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { SignupComponent } from './admin/signup/signup.component';
import { ProductAddComponent } from './admin/product-add/product-add.component';
import { ProductAdminListComponent } from './admin/product-admin-list/product-admin-list.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { CategoryAdminListComponent } from './admin/category-admin-list/category-admin-list.component';
import { CategoryAddComponent } from './admin/category-add/category-add.component';
import { CategoryEditComponent } from './admin/category-edit/category-edit.component';
import { CartComponent } from './cart/cart.component';
import { CheckuotComponent } from './checkuot/checkuot.component';

// import { Home } from './main';
export const routes: Routes = [
  { path: '', component: HomeComponentsComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: 'product', component: ProductComponentComponent },
  { path: 'product/cart', component: CartComponent },
  { path: 'checkout', component: CheckuotComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [guardGuard],
    children: [{ path: 'product', component: ProductAdminListComponent } ,
    { path: 'product/add', component: ProductAddComponent },
    { path: 'edit-product/:id', component: ProductEditComponent },
    { path: 'category', component: CategoryAdminListComponent },
    { path: 'category/add', component: CategoryAddComponent },
    { path: 'edit-category/:id', component: CategoryEditComponent },
  ],
  },
  { path: 'signin', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];
