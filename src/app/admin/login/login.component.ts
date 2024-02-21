import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FooterComponentComponent } from '../../footer-component/footer-component.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,FooterComponentComponent,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required,Validators.minLength(6)]),
      email: new FormControl('', [Validators.required,Validators.email]),
      // phone: new FormControl('', [Validators.required,Validators.pattern('0+[0-9]+')]),
      // email: new FormControl('', [Validators.required,Validators.pattern('a-zA-z'),Validators.email]),
     });
     message = "";  
     http = inject(HttpClient);
     router = inject(Router);
    onSubmit(){
      let username = this.loginForm.controls.username.value;
      let password = this.loginForm.controls.password.value;
      let email = this.loginForm.controls.email.value;
      
      const body = {username: username, password: password , email: email};
      this.http.post<any>('http://localhost:3000/users',body)
      .subscribe((response:any)=>{
         if(response.login) {
        this.message = "Đăng nhập thành công";
        localStorage.setItem('login','Oki');
        this.router.navigate(['dashboard']);
      }
      else{
        this.message = "Sai tên đăng nhập hoặc mật khẩu";
      }
      });
    
    }
}


