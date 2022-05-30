import { Routes } from "@angular/router";
import { LoginComponent } from "../login/login.component";
import { CustomerComponent } from "../customer/customer.component";
import { AuthGuard } from "../Guards/auth.guard";


export const AppRoutes:Routes=[
    {path:'login',component:LoginComponent},
    {path:'customer',component:CustomerComponent,canActivate:[AuthGuard]},
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'**',redirectTo:'customer',pathMatch:'full'}
];