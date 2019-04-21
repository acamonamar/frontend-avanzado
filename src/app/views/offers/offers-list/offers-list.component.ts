import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/shared/models/offer.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../../shared/store/app.state';
import {User} from '../../../shared/models/user.model';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html'
})
export class OffersListComponent implements OnInit {
  offersStudy: Offer[] = [];
  offersOther: Offer[] = [];
  offers: Offer[];
  user: User;
  constructor(
    private store: Store<AppState>
  ) {
    this.store.select('usuario').subscribe(userState => {
      this.user = userState.user;
    });
    this.store.select('offers').subscribe(offersState => {
      this.offers = offersState.offers;
    });
    this.selectOffers();
  }

  private selectOffers() {
    const studiesOfUser = this.user.studies;
    const offersOfUser = this.user.offers;
    this.offersStudy = this.offers
      .filter(offer =>
        studiesOfUser.some(study => study.uid === offer.category.uid)
      )
      .map(offer => {
        const offerUser = !!offersOfUser.find(
          _offerUser => _offerUser.id === offer.id
        );
        return { ...offer, subscribe: offerUser };
      });

    this.offersOther = this.offers.filter(offer =>
      studiesOfUser.every(study => study.uid !== offer.category.uid)
    );
  }

  ngOnInit() {}
}
