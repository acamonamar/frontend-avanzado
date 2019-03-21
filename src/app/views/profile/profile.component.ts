//import 'rxjs/add/operator/switchMap';
import {Component, Input, OnInit, Output} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { User }           from '../../shared/models/user';
import { UserService }    from '../../shared/services/user.service';
import { Studie }         from "../../shared/models/studie";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(
      private _userservice: UserService,
      private _route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    // this.getUser();
    this.getUserById();
  }

  getUserById() {
    const id = +this._route.snapshot.paramMap.get('id');
    this._userservice.getUser(id)
      .subscribe(user => this.user = user);
  }

}
