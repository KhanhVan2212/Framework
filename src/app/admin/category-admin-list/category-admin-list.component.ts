import { Component } from '@angular/core';
import { HeaderAdminComponent } from '../header-admin/header-admin.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-category-admin-list',
  standalone: true,
  imports: [HeaderAdminComponent , HttpClientModule],
  templateUrl: './category-admin-list.component.html',
  styleUrl: './category-admin-list.component.css'
})
export class CategoryAdminListComponent {
  constructor(private http:HttpClient){}
  categories:any;
  ngOnInit(){
    this.getAllProduct();
  }
  getAllProduct(){
      this.http.get('http://localhost:3000/categories').subscribe((response)=>{
       this.categories = response;
      });
  }
  handleDelCategory(cid:any){
    if(confirm('Are you sure you want to delete')){
      this.http.delete('http://localhost:3000/categories/'+cid).subscribe((response)=>{
         this.categories = response;
         this.getAllProduct();
        });
  };
  alert('Xoa thanh cong')
};
}
