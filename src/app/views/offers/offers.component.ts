import { Component, OnInit, Output } from '@angular/core';
import {User} from '../../shared/models/user';
import {UserService} from '../../shared/services/user.service';
import {ActivatedRoute} from '@angular/router';
import {Offers} from '../../shared/models/offers';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  @Output() offersList: Offers[];

  constructor(
      private _userservice: UserService,
  ) {
  }

  ngOnInit(): void {
    this.getOffers();
  }

  getOffers() {
    this._userservice.getUsers().subscribe(
        res => {
          console.log('Repuesta del subscribe: ');
          console.log(res);

          let i: number;
          let j: number;
          const tempObj = {};
          for ( i = 0; i < res.length; i++) {
            if ( res[i].userRol === 'Company') {
                console.log(res[i].userRol);
                console.log(res[i].offers.length);
              for ( j = 0 ; j < res[i].offers.length; j++) {
                  console.log(res[i].id);
                      console.log(res[i].offers[j].oid);
                      console.log(res[i].offers[j].empresa);
                      console.log(res[i].offers[j].familia);
                      console.log(res[i].offers[j].fecha);
                      console.log(res[i].offers[j].puesto);
                this.offersList.push({
                  id: res[i].id,
                  oid: res[i].offers[j].oid,
                    puesto: res[i].offers[j].puesto,
                    empresa: res[i].offers[j].empresa,
                  familia: res[i].offers[j].familia,
                  fecha: res[i].offers[j].fecha,
                });
              }
            }
          }
        });
  }
}

