import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  let login:any = localStorage.getItem('user');
  login = JSON.parse(login);
  // console.log(login);  
  if (login.user.id==1){    
    return true;
  }
  else {
    alert("Bạn không có quyền vào trang này");
    router.navigate(['/']);
    return false;
  }
};
