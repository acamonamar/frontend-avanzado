import { Action } from '@ngrx/store';
import { Offer } from '../../models/offer.model';


export enum OfferActionTypes {
    CARGAR_OFFERS = '[offers] Cargar Ofertas',
    CARGAR_OFFERS_FAIL = '[offers] Cargar Ofertas FAIL',
    CARGAR_OFFERS_SUCCESS = '[offers] Cargar Ofertas SUCCESS',
}

// OFFERS
export class CargarOffers implements Action {
    readonly type = OfferActionTypes.CARGAR_OFFERS;
}

export class CargarOffersFail implements Action {
    readonly type = OfferActionTypes.CARGAR_OFFERS_FAIL;
    constructor(public payload: any) {}
}

export class CargarOffersSuccess implements Action {
    readonly type = OfferActionTypes.CARGAR_OFFERS_SUCCESS;
    constructor(public offers: Offer[]) {}
}


export type All =
    | CargarOffers
    | CargarOffersFail
    | CargarOffersSuccess
    ;
