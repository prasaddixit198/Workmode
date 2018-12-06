import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { Employees } from '../employees';
import { EmployeesService } from '../employees.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-employ-show',
  templateUrl: './employ-show.component.html',
  styleUrls: ['./employ-show.component.css']
})
export class EmployShowComponent implements OnInit {
employees: Observable<Employees>;
empId : number;
  constructor(private employeesService : EmployeesService,private route : ActivatedRoute) {
    this.empId=this.route.snapshot.params["empId"];;
    this.employees = employeesService.showEmploy(this.empId);
   }

  ngOnInit() {
  }

}
