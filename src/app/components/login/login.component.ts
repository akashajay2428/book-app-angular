import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service-auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private auth:AuthService,private router:Router){}
  username:string=''
  password:string=''
 

  onSubmit(){
    if(this.auth.logged(this.username,this.password)){
      this.router.navigate(['/course']);
    }
    else{
      alert("Failed login")
    }
  }
}
