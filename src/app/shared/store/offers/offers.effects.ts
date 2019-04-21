import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';

import * as fromOffersActions from './offers.actions';
import {map} from 'rxjs/operators';
import {ofType} from '@ngrx/effects';
import {switchMap} from 'rxjs/internal/operators/switchMap';
import {SigninService} from '../../../views/signin/signin.service';
import {ProfileService} from '../../services/profile.service';
import {CargarOffers, CargarOffersSuccess} from './offers.actions';
import {OffersService} from '../../services/offers.service';


@Injectable()
export class OffersEffects {

    constructor(
        private actions$: Actions,
        private signinservice: SigninService,
        private profileservice: ProfileService,
        private offerservice: OffersService
    ) { }

    @Effect()
    cargarOffers$ = this.actions$.pipe(
        ofType(fromOffersActions.OfferActionTypes.CARGAR_OFFERS),
        map((action: CargarOffers) => action.type),
        switchMap(() => {
            return this.offerservice.getOffers().pipe(
                map(offers => new CargarOffersSuccess(offers)));
        }));

/*

    @Effect()
    login$ = this.actions$.pipe(
        ofType(loginActions.UserActionTypes.LOGIN),
        map((action: LogIn) => action.user),
        switchMap(payload => {
            return this.signinservice.login(payload).then(user => {
                return user !== undefined ? new LogInSuccess(user) :
                    new LogInFailure(user);
            });
        }));

    @Effect()
    saveUser$ = this.actions$.pipe(
        ofType(loginActions.UserActionTypes.SAVE_USER),
        map((action: SaveUser) => action.user),
        switchMap(usuario => this.profileservice.updateProfile(usuario)));


    /*@Effect()
     login$ = this.actions$.pipe(
         ofType(loginActions.AuthActionTypes.LOGIN),
         map((action: LogIn) => action.user),
             switchMap(payload => {
                 console.log('Este es el payload:' + payload);
                 return this.signinservice.logIn(payload.email, payload.password).pipe(
                     map((user) => {
                         console.log(user);
                         return new LogInSuccess({user: user.name, email: payload.email});
                     }), /*catch((error) => {
                         console.log(error);
                         return Observable.of(new LogInFailure({ error: error }));
                     }),
                 );
             })
     );*/
    /*@Effect()
    saveUser$ = this.actions$.pipe(
            ofType(loginActions.UserActionTypes.SAVE_USER),
            map((action: SaveUser) => action.user),
            switchMap(payload => {
                return this.profileservice.updateProfile(payload)
                    .pipe(
                        map(user => new SaveUserSuccess(user)),
                        catchError(error => of(new SaveUserFailure(error)))
                    );
            }));*/

}

