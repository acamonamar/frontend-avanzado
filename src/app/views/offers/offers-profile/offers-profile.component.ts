import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/app/shared/services/offers.service';
import { Offer } from 'src/app/shared/models/offer.model';
import { ProfileService } from 'src/app/shared/services/profile.service';
import {AppState} from '../../../shared/store/app.state';
import {Store} from '@ngrx/store';
import {User} from '../../../shared/models/user.model';

@Component({
  selector: 'app-offers-profile',
  templateUrl: './offers-profile.component.html'
})
export class OffersProfileComponent implements OnInit {
  offers: Offer[] = [];
  user: User;
  constructor( private store: Store<AppState> ) {
    this.selectOffers();
  }

  private selectOffers() {
    this.store.select('usuario').subscribe(userState => {
      this.user = userState.user;
    });
    this.offers = this.user.offers;
  }

  ngOnInit() {}
}
