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
   mess ="";
    loginForm = new FormGroup({
      
      password: new FormControl('', [Validators.required,Validators.minLength(6)]),
      email: new FormControl('', [Validators.required,Validators.email]),
      // phone: new FormControl('', [Validators.required,Validators.pattern('0+[0-9]+')]),
      // email: new FormControl('', [Validators.required,Validators.pattern('a-zA-z'),Validators.email]),
     });
     message = "";  
     http = inject(HttpClient);
     router = inject(Router);
    
      onSubmit(){
       
        let password = this.loginForm.controls.password.value;
        let email = this.loginForm.controls.email.value;
        // gửi request post đến api json-server-auth
        this.http.post('http://localhost:3000/signin',{email,password}).subscribe(data => {
          if (data!==null) {
            console.log(data);   
            localStorage.setItem('user',JSON.stringify(data));     
            alert("Đăng nhập thành công")
            this.router.navigate(["/"]);
          }   
        },err=>{
         alert("Tài khoản không chính xác")
        });
      }
}


