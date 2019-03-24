import { Component, OnInit } from '@angular/core';

import { User } from '../../shared/models/user';
import { UserService} from '../../shared/services/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user: User;

  constructor(
      private _userservice: UserService,
      private _route: ActivatedRoute,
      ) {
  }

  ngOnInit(): void {
    this.getUserById();
  }

  getUserById() {
    const id = +this._route.snapshot.paramMap.get('id');
    this._userservice.getUser(id)
        .subscribe(user => this.user = user);
  }
}
