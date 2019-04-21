import {Offer} from '../../models/offer.model';
import * as fromOfferActions from './offers.actions';

export interface OfferState {
    loaded: boolean;
    loading: boolean;
    offers: Offer[] | null;
    id: number | null;
    error: string | null;
}

const initOfferState: OfferState = {
    loaded: false,
    loading: false,
    offers: [],
    id: null,
    error: null,
};


export function OffersReducer(state = initOfferState, action: fromOfferActions.All): OfferState {
    switch (action.type) {
        case fromOfferActions.OfferActionTypes.CARGAR_OFFERS: {
            return {
                ...state,
                loading: true,
            };
        }
        case fromOfferActions.OfferActionTypes.CARGAR_OFFERS_SUCCESS: {
            return {
                ...state,
                loaded: true,
                loading: false,
                offers: [...action.offers],
                error: null
            };
        }

        case fromOfferActions.OfferActionTypes.CARGAR_OFFERS_FAIL: {
            return {
                ...state,
                loaded: false,
                loading: false,
                error: action.payload
            };
        }


        default: {
            return state;
        }
    }
}

