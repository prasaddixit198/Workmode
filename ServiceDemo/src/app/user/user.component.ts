import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users : Observable<User[]>;
  constructor(private userService : UserService) { 
    this.users = userService.getUsers();
  }

  ngOnInit() {
  }

}
