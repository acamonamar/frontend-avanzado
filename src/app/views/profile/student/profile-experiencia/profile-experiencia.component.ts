import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../shared/models/user';
import { SigninService } from '../../../../shared/services/signin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-experiencia',
  templateUrl: './profile-experiencia.component.html',
  styleUrls: ['./profile-experiencia.component.scss'],
})
export class ProfileExperienciaComponent implements OnInit {

  public identity;
  @Input() user: User;

  constructor(
      private _route: ActivatedRoute,
      private _signinservice: SigninService,

  ) {}
  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this._route.snapshot.paramMap.get('id');
    this._signinservice.getUser(id)
        .subscribe(user => this.user = user);
  }
}
