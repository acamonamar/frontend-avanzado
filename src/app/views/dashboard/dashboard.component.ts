import { Component, OnInit, Output }  from '@angular/core';
import { ProfileService }     from '../../shared/services/profile.service';
import { SigninService }      from '../../shared/services/signin.service';
import { User }               from '../../shared/models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ProfileService, SigninService]
})
export class DashboardComponent implements OnInit {
  public identity;
  users: User[];

  constructor(
      private _profileservice: ProfileService,
      private _signinservice: SigninService
  ) {}

  ngOnInit() {
    this.getUsers();
    this.identity = this._profileservice.getIdentity();
  }

  getUsers(): void {
    this._signinservice.getUsers()
        .subscribe(users => this.users = users);
  }

}
