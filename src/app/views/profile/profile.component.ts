import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit }         from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';

import { User }                             from '../../shared/models/user';
import { SigninService }                    from '../../shared/services/signin.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Input() user: User;

  constructor(
      private _signinservice: SigninService,
      private _route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this._route.paramMap
        .switchMap((params: ParamMap) => this._signinservice.getUser(+params.get('uid')))
        .subscribe(user => this.user = user);
  }

  /*getUser(): void {
    const id = +this._route.snapshot.paramMap.get('id');
    this._signinservice.getUser(id)
      .subscribe(user => this.user = user);
  }*/

}
