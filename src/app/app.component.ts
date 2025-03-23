import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './service-auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Book App';
  constructor(private auth:AuthService,private router:Router){}

  isTrue(){
    return this.auth.isAuthentiated()
  }

  logoutbutton(){
    this.auth.logout()
    this.router.navigate(['/login']);
  }
}
