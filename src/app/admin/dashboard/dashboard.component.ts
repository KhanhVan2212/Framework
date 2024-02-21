import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderAdminComponent } from '../header-admin/header-admin.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet,HeaderAdminComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
