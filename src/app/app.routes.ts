import { Routes } from '@angular/router';
import { FormComponent } from './form-component/form-component';
import { Home } from './home/home';
import { Products } from './products/products';
import { Login } from './login/login';
import { SignUp } from './sign-up/sign-up';
import { Profile } from './profile/profile';

export const routes: Routes = [
  { path: '', component:Login},
  {path:'home',component:Home},
  { path: 'form-component', component: FormComponent },
  { path :"product", component:Products},
  {path:"login",component:Login},
  {path:'register',component:SignUp},
  {path:'profile',component:Profile}
];
