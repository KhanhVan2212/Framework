import { Component, inject } from '@angular/core';
import { FooterComponentComponent } from '../../footer-component/footer-component.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [  FooterComponentComponent , ReactiveFormsModule, CommonModule,HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  registerForm = new FormGroup({
    password: new FormControl('', [Validators.required,Validators.minLength(6)]),
    email: new FormControl('', [Validators.required,Validators.email]),
   });
   message = "";  
   http = inject(HttpClient);
   router = inject(Router);
   onSubmit(){
       
    let password = this.registerForm.controls.password.value;
    let email = this.registerForm.controls.email.value;
    // gửi request post đến api json-server-auth
    this.http.post('http://localhost:3000/signup',{email,password}).subscribe(data => {
      if (data!==null) {
        console.log(data);   
        localStorage.setItem('user',JSON.stringify(data));     
        alert("Đăng ký thành công")
        this.router.navigate(["/signin"]);
      }   
    },err=>{
     alert("Tài khoản đã tồn tại")
    });
  }
}
