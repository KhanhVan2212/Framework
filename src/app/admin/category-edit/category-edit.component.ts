import { Component } from '@angular/core';
import { HeaderAdminComponent } from '../header-admin/header-admin.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-edit',
  standalone: true,
  imports: [HeaderAdminComponent, ReactiveFormsModule , CommonModule , HttpClientModule],
  templateUrl: './category-edit.component.html',
  styleUrl: './category-edit.component.css'
})
export class CategoryEditComponent {
  constructor(private http: HttpClient,private route:ActivatedRoute ,  private router : Router){

  }
  category:any;
  categoryForm = new FormGroup({
        name:new FormControl('',[Validators.required ]),
    });
    mess = '';
    id = this.route.snapshot.params['id'];
    categories:any={id:"",name:""};
    onSubmit(){
        let data = {
          name: this.categoryForm.controls.name.value,
        }
        this.http.put('http://localhost:3000/categories/'+this.id,data).subscribe((data:any) =>{
            if (data.id!==''){
                this.mess = 'Cập nhật thành công';
                this.router.navigate(['dashboard/category']);
            }  
            else{
              this.mess = 'Đăng không thành công';
            }
        });
        
    }
    ngOnInit() {

      this.getCategoryByID(this.id);
    }

    getCategoryByID(id:any){
      this.http.get('http://localhost:3000/categories/'+id).subscribe((data:any) =>{
            this.categories = data;  
            this.categoryForm.setValue({
              name: data.name,
            }) 
      });
    }
}
