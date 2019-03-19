import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ProfileService }                   from '../../shared/services/profile.service';
import { User }                             from '../../shared/models/user';
import { SigninService }                    from '../../shared/services/signin.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [ProfileService, SigninService]
})
export class ProfileComponent implements OnInit {
  @Input() user: User;

  constructor(
      private _signinservice: SigninService,
      private _route: ActivatedRoute,
      private _router: Router,
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = +this._route.snapshot.paramMap.get('id');
    this._signinservice.getUser(id)
      .subscribe(user => this.user = user);
  }

}
