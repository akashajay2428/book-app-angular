import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service-auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  

  const router=inject(Router)
  const auth=inject(AuthService)

  if(auth.isAuthentiated()){
    return true
  }else{
    alert('You have to log in')
    router.navigate(['/login'])
    return false
  }
};
