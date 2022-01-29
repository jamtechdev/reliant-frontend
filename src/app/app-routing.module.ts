import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'employees', component: EmployeeComponent },
      { path: 'clients', component: ClientComponent },
    ]
  },

  { path: 'login', component: LoginComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
