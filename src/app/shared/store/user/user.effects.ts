import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';

import * as loginActions from './user.actions';
import {map} from 'rxjs/operators';
import {ofType} from '@ngrx/effects';
import {switchMap} from 'rxjs/internal/operators/switchMap';
import {SigninService} from '../../../views/signin/signin.service';
import {LogIn, LogInFailure, LogInSuccess, SaveUser} from './user.actions';
import {ProfileService} from '../../services/profile.service';


@Injectable()
export class UserEffects {

    constructor(
      private actions$: Actions,
      private signinservice: SigninService,
      private profileservice: ProfileService
    ) { }



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

