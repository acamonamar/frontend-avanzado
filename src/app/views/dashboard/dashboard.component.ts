import { Component, OnInit, Output }  from '@angular/core';

import { User }               from '../../shared/models/user';
import { UserService}         from "../../shared/services/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  users: User[] = [];

  constructor(private _userservice: UserService) {
  }

  ngOnInit(): void {
    this._userservice.getUsers().subscribe(users => this.users = users);
  }

}
