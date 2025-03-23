import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private isloggedin:boolean=false

  logged(username:string,password:string):boolean{
    if(username=='akash' && password=='123'){
      return this.isloggedin=true
    }
    else{
      return false
    }
  }

  logout():void{
    this.isloggedin=false
  }

  isAuthentiated(){
    return this.isloggedin
  }
}
