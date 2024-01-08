import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponentComponent } from '../app/header-component/header-component.component';
import { SlideComponentComponent } from '../app/slide-component/slide-component.component';
import { ProductComponentComponent } from '../app/product-component/product-component.component';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterOutlet ,HeaderComponentComponent , SlideComponentComponent ,ProductComponentComponent],
  templateUrl: './home.html',
})
export class MainComponent {

}