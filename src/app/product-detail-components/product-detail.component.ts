import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CommonModule} from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FooterComponentComponent } from '../footer-component/footer-component.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [HttpClientModule,CommonModule,FooterComponentComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product:any;
  constructor(private routes: ActivatedRoute){
  }
  httpClient = inject(HttpClient);
  ngOnInit(){
    let id = this.routes.snapshot.paramMap.get('id');
    this.getDetailProductById(String(id));
  }
  getDetailProductById(id:string){
    console.log(id);  
    console.log(typeof id);

    this.httpClient.get(`http://localhost:3000/products/${id}`)
    .subscribe((response:any)=>{
        console.log(response);
        this.product = response;
    })  
  }
  addToCart(pid:any,name:any,image:any,price:any){
    const product = {
      pid: pid,
      name:name,
      image:image,
      price:price,
      quantity:1
    }
      const cart = localStorage.getItem('cart');
      if (cart ==null){
        console.log(`Chưa tồn tại`);        
        localStorage.setItem('cart',JSON.stringify([product]));
      }
      else{
        console.log(`Đã tồn tại `);
         const products = JSON.parse(cart);
         console.log(products);    
        let ktra = false;   
        let vitri = -1;
        for (let i = 0; i < products.length; i++){
           if (products[i].pid == pid){
            ktra=true;
            vitri = i;
           }
        }
        if (ktra){
          products[vitri].quantity = products[vitri].quantity+1;
        }
        else {
          products.push(product);
        }
        localStorage.setItem('cart',JSON.stringify(products));

      }    
      alert("Đặt hàng thành công");
   }
}
