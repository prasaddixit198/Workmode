import { Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';
import {Http, Response} from '@angular/http';
import {Employees} from './employees';
import 'rxjs/add/operator/map';
import { LeaveDetails } from './leave-details';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  applyLeave(leavedetails:LeaveDetails,empid : number):Observable<String>{
    return this.http.post('http://localhost:8080/ftp87/api/leavedetails/applyleave/' +empid,leavedetails)
     .map(response=>response.text()) 
   }
  constructor(private http: Http) { }
  getEmployees():Observable<Employees[]>{
    return this.http.get("http://localhost:8080/ftp87/api/employees").map((res : Response) => res.json());
  }
  showEmploy(empId):Observable<Employees>{
    return this.http.get("http://localhost:8080/ftp87/api/employees/" +empId).map((res : Response) => res.json());
  }
}
