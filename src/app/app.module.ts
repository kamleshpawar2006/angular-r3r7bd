import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CommonService } from './common.service';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { EmployeeFeedbackComponent } from './employee-feedback/employee-feedback.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ManagerListComponent } from './manager-list/manager-list.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { EditEmployeeFeedbackComponent } from './edit-employee-feedback/edit-employee-feedback.component';
import { EditManagerFeedbackComponent } from './edit-manager-feedback/edit-manager-feedback.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { AuthenticateLogin } from './authenticate';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EmployeeHomeComponent,
    ManagerHomeComponent,
    EmployeeFeedbackComponent,
    EmployeeListComponent,
    ManagerListComponent,
    EditEmployeeFeedbackComponent,
    EditManagerFeedbackComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [CommonService, AuthenticateLogin],
  bootstrap: [AppComponent]
})
export class AppModule { }
