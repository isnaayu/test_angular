import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Home details'
    },
    {
      path: 'login',
      component: LoginComponent,
      title: 'Login Page'
    },
    {
      path: 'register',
      component: RegisterComponent,
      title: 'Register'
    }
  ];
  
  export default routeConfig;