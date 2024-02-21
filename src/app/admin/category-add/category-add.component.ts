import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderAdminComponent } from '../header-admin/header-admin.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-add',
  standalone: true,
  imports: [HeaderAdminComponent , ReactiveFormsModule, HttpClientModule ,CommonModule],
  templateUrl: './category-add.component.html',
  styleUrl: './category-add.component.css'
})
export class CategoryAddComponent {
  constructor(private http: HttpClient , private route : Router){

  }
  category:any;
  categoryForm = new FormGroup({
        name:new FormControl('',[Validators.required]),
    });
    mess = '';
    onSubmit(){
        let data = {
          name: this.categoryForm.get('name')?.value,
        }
        this.http.post('http://localhost:3000/categories',data).subscribe((data:any) =>{
            if (data.id!==''){
                this.mess = 'Add thành công';
                this.categoryForm.setValue({
                  name:'',
                });
                this.route.navigate(['dashboard/category']);
            }  
            else{
              this.mess = 'Add không thành công';
            }
        });
        
    }
    ngOnInit() {
      this.getCategory();
      
    }
    getCategory(){
      this.http.get('http://localhost:3000/categories').subscribe((data:any) =>{
            this.category = data;         
      });
    }
}
