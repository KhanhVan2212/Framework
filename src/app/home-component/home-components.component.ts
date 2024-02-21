import { Component } from '@angular/core';
import { ProductComponentComponent } from '../product-component/product-component.component';
import { SlideComponentComponent } from '../slide-component/slide-component.component';
import { FooterComponentComponent } from '../footer-component/footer-component.component';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [ProductComponentComponent,SlideComponentComponent,FooterComponentComponent],
  templateUrl: './home-components.component.html',
  styleUrl: './home-components.component.css'
})
export class HomeComponentsComponent {

}
