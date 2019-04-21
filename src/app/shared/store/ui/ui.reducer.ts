import * as fromUI from './ui.actions';

export interface uiState {
    isLoading: boolean;
}

const initState: uiState = {
    isLoading: false
}

export function UIReducer(state = initState, action: fromUI.acciones): uiState {

    switch (action.type) {
        case fromUI.ACTIVAR_LOADING:
            return{
                isLoading: true
            };

        case fromUI.DESACTIVAR_LOADING:
            return{
                isLoading: false
            };

        default:
            return state;
    }

}
