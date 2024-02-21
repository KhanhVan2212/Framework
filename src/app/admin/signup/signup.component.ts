import { Component } from '@angular/core';
import { FooterComponentComponent } from '../../footer-component/footer-component.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [  FooterComponentComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

}
