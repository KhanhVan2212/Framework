import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { SlideComponentComponent } from './slide-component/slide-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterOutlet ,HeaderComponentComponent , SlideComponentComponent ,FooterComponentComponent],
  templateUrl: './main.html',
})
export class MainComponent {

}