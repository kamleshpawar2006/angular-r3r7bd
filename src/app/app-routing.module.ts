import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { EmployeeFeedbackComponent } from './employee-feedback/employee-feedback.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ManagerListComponent } from './manager-list/manager-list.component';
import { EditEmployeeFeedbackComponent } from './edit-employee-feedback/edit-employee-feedback.component';
import { EditManagerFeedbackComponent } from './edit-manager-feedback/edit-manager-feedback.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'employee-home', component: EmployeeHomeComponent, children: [
    {
      path: 'list', component: EmployeeListComponent,
      // canActivate: [AuthenticateLogin]
    },
    {
      path: 'new', component: EmployeeFeedbackComponent
    },
    {
      path: 'edit/:empId/:project', component: EditEmployeeFeedbackComponent
    },
    {
      path: '', redirectTo: 'list', pathMatch: 'full'
    },
    ]
  },
  { path: 'manager-home', component: ManagerHomeComponent, children: [
    {
      path: 'edit/:empId/:project', component: EditManagerFeedbackComponent
    },
    {
      path: 'list', component: ManagerListComponent
    },
    {
      path: '', redirectTo: 'list', pathMatch: 'full'
    }
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
