import { Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';
import {Http, Response} from '@angular/http';
import {User} from './user';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: Http) {}
  getUsers():Observable<User[]>{
    return this.http.get("https://jsonplaceholder.typicode.com/users").map((res : Response) => res.json());
  }
}
