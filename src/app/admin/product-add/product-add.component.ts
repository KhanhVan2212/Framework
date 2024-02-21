import { Component } from '@angular/core';
import { HeaderAdminComponent } from '../header-admin/header-admin.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [HeaderAdminComponent,CommonModule ,ReactiveFormsModule , HttpClientModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
  constructor(private http: HttpClient ,private router: Router){
    
  }
  category:any;
    productForm = new FormGroup({
        name:new FormControl('',[Validators.required]),
        price: new FormControl('',[Validators.required]),
        cate_id:new FormControl(1,Validators.required),
        image: new FormControl('',[Validators.required]),
        detail: new FormControl('',[Validators.required]),
    });
    mess = '';
    onSubmit(){
        let data = {
          name: this.productForm.get('name')?.value,
          price: this.productForm.get('price')?.value,
          cate_id: this.productForm.get('cate_id')?.value,
          image: this.productForm.get('image')?.value,
          detail: this.productForm.get('detail')?.value
        }
        this.http.post('http://localhost:3000/products',data).subscribe((data:any) =>{
            if (data.id!==''){
                this.mess = 'Add thành công';
                this.productForm.setValue({
                  name:'',
                  price: '',
                  cate_id:1,
                  image:'',
                  detail:''
                });
                this.router.navigate(['/dashboard/product']);
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
