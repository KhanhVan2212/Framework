import { Component } from '@angular/core';
import { iProduct } from '../interface/product';
@Component({
  selector: 'app-product-component',
  standalone: true,
  imports: [],
  templateUrl: './product-component.component.html',
  styleUrl: './product-component.component.css'
})
export class ProductComponentComponent {
    product: iProduct[] = [{
      id : 1,
      image : 'asdas',
      title : 'asdsad',
      price : 1231,
    },
  
  ];
}
