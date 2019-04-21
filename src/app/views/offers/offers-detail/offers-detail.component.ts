import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/shared/models/offer.model';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import {AppState} from '../../../shared/store/app.state';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-offers-detail',
  templateUrl: './offers-detail.component.html',
  styleUrls: ['./offers-detail.component.scss']
})
export class OffersDetailComponent implements OnInit {
  offers: Offer[];
  offer: Offer;
  user: User;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.store.select('usuario').subscribe(userState => {
      this.user = userState.user;
    });
    this.store.select('offers').subscribe(offersState => {
      this.offers = offersState.offers;
    });
    this.route.params.subscribe(params => {
      const offerID = +params.id;
      this.offer = (this.offers.find(offer => offer.id === offerID) || {}) as Offer;
    });
  }

  subscribeOffer() {
    this.user.offers = [...this.user.offers, this.offer];
    this.router.navigate(['/admin/profile']);
  }
  unsubscribeOffer() {
    this.user.offers = this.user.offers.filter(
      _offer => _offer.id !== this.offer.id
    );
    this.router.navigate(['/admin/profile']);
  }
  isSubscribe(): boolean {
    return !!this.user.offers.find(_offer => this.offer.id === _offer.id);
  }

  ngOnInit() {}
}
