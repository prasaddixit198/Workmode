import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { Employees } from '../employees';
import { EmployeesService } from '../employees.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees : Observable<Employees[]>;
  constructor(private employeesService : EmployeesService, private router : Router) { 
    this.employees = employeesService.getEmployees();
  }
  empMgrid: number;
  empId:number;
Dashboard(empId, empMgrid) {
 this.empId=empId;
 localStorage.setItem("empId",empId);
 this.empMgrid=empMgrid;
 localStorage.setItem("empMgrid",empMgrid);
  this.router.navigate(["/Dashboard"]);
}
  ngOnInit() {
  }

}
