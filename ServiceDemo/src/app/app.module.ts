import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { EmployeesComponent } from './employees/employees.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes} from '@angular/router';
import { UserService } from './user.service';
import { EmployShowComponent } from './employ-show/employ-show.component';
import { ManagerShowComponent } from './manager-show/manager-show.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { FormsModule } from '../../node_modules/@angular/forms';

const appRoutes: Routes = [
  {path: 'Dashboard/:empId/:empMgrid', component: DashboardComponent},
  {path: '', component: EmployeesComponent}
] ;
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EmployeesComponent,
    DashboardComponent,
    EmployShowComponent,
    ManagerShowComponent,
    ApplyLeaveComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    HttpModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
