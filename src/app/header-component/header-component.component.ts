import { Component, inject } from '@angular/core';
import { iMenu } from '../interface/menu';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.css',
})
export class HeaderComponentComponent {
  router = inject(Router)
  logout(){
    localStorage.removeItem('login');   
    this.router.navigate(['login']);
  }
  menus: iMenu[] = [
    {
      id: 1,
      title: 'Trang chủ',
      url: 'http://localhost:4200',
      parent: 0,
    },
    {
      id: 2,
      title: 'Admin',
      url: '/dashboard/product',
      parent: 0,
    },
    {
      id: 3,
      title: 'Sản phẩm',
      url: '',
      parent: 0,
    },
    {
      id: 4,
      title: 'Giỏ hàng',
      url: 'product/cart',
      parent: 0,
    },
    {
      id: 5,
      title: 'Đăng nhập',
      url: '/login',
      parent: 0,
    },
    {
      id: 6,
      title: 'Đăng ký',
      url: '/signup',
      parent: 0,
    },
    {
      id: 7,
      title: 'Thanh Toan',
      url: '/checkout',
      parent: 0,
    },
   
   
  
  ];
  checkChildrent(menuId:number){
    let check = false;
    for(let m of this.menus){
      if(m.parent == menuId){
        check = true;
        break;
    }
  }
  return check;
}
}
