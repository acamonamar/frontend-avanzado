import {Component, OnInit} from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { SigninService } from 'src/app/views/signin/signin.service';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../app.settings';
import { OffersService } from '../../services/offers.service';
import {User} from '../../models/user.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import * as fromUserActions from '../../store/user/user.actions';
import {CargarOffers} from '../../store/offers/offers.actions';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.template.html'
})
export class AdminLayoutComponent{
  /*   constructor() {} */
  user: User;
  /* MOCK PURPOSES */
  constructor(
      private profileService: ProfileService,
      private offersService: OffersService,
      private http: HttpClient,
      private store: Store<AppState>
  ) {
    /*this.login({ email: 'jandrocm@gmail.com', password: '1234' }).then(
        user => {
          this.profileService.user = user;
        }
    );*/

    this.store.select('usuario').subscribe(userState => {
      this.user = userState.user;
    });
    this.offersService.getOffers().subscribe(offers => {
      this.offersService.offers = offers;
    });

    this.store.dispatch(new CargarOffers());
  }
}
