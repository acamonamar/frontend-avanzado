// root-reducer
import * as fromUI from './ui/ui.reducer';
import * as fromUser from './user/user.reducer';
import * as fromOffers from './offers/offers.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    ui: fromUI.uiState;
    usuario: fromUser.UserState;
    offers: fromOffers.OfferState;
}

export const appReducers: ActionReducerMap<AppState> = {
    ui: fromUI.UIReducer,
    usuario: fromUser.UserReducer,
    offers: fromOffers.OffersReducer
}

