import { Component } from '@angular/core';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { SigninService } from '../signin/signin.service';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../shared/store/app.state';
import {User} from '../../shared/models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  user: User;
  constructor(
      private router: Router,
      private profileService: ProfileService,
      private store: Store<AppState>
  ) {
    this.store.select('usuario').subscribe(userState => {
      const valor = Object.values(userState.user);
      this.user = valor[0];
    });
  }

  /*   constructor(
    private profileService: ProfileService,
    private signinService: SigninService
  ) {
    this.signinService
      .login({ email: 'carlos.caballero@gmail.com', password: '1234' })
      .then(user => {
        this.profileService.user = user;
      });
  } */
}
