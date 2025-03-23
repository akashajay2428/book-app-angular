import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
// import { DasboardComponent } from './components/dasboard/dasboard.component';
import { CoursesComponent } from './components/courses/courses.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent},
    // {path:'dashboard',component:DasboardComponent,canActivate:[authGuard]},
    {path:'course',component:CoursesComponent,canActivate:[authGuard]},
    {path:'',redirectTo:'home',pathMatch:'full'}
];


