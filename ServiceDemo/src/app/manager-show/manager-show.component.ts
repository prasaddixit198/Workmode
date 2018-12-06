import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { Employees } from '../employees';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-manager-show',
  templateUrl: './manager-show.component.html',
  styleUrls: ['./manager-show.component.css']
})
export class ManagerShowComponent implements OnInit {
  employees: Observable<Employees>;
  empMgrid : number;
  constructor(private employeesService : EmployeesService) {
    this.empMgrid=parseInt(localStorage.getItem("empMgrid"));
    this.employees = employeesService.showEmploy(this.empMgrid);
   }
   

  ngOnInit() {
  }

}
