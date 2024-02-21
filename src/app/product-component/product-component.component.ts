import { Component, inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FooterComponentComponent } from '../footer-component/footer-component.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-product-component',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FooterComponentComponent,ReactiveFormsModule],
  templateUrl: './product-component.component.html',
  styleUrl: './product-component.component.css'
})
export class ProductComponentComponent {
  formfilter = new FormGroup({
    minprice: new FormControl(1),
    maxprice: new FormControl(1000  )
   });
   products: any;
   httpClient = inject(HttpClient);
    ngOnInit() {
      let login = localStorage.getItem('login');
      console.log(login);
      
      this.getProductData();
    }
    getProductData(){
    this.httpClient.get('http://localhost:3000/products')
    .subscribe((response:any)=>{
        // console.log(response);
        this.products = response;
    })
   }
   onFilter(){   
    // let maxprice = (this.formfilter.controls.maxprice.value!==null)?this.formfilter.controls.maxprice.value:0
    let maxprice = this.formfilter.controls.maxprice.value??0; 
    // let maxprice = 10;
    let minprice =  this.formfilter.controls.minprice.value??0
    //Lấy toàn bộ danh sách sản phẩm
    this.httpClient.get('http://localhost:3000/products')
    .subscribe((response:any)=>{
        //Lọc sản phẩm theo điều kiện
        // console.log(response);
        // lấy giá trị max,min từ input
        
        const productfilter = response.filter((data:any)=>{
            return data.price>=minprice && data.price<=maxprice;
        })
        // console.log(productfilter);        
        this.products = productfilter;
    })
   }
  
}