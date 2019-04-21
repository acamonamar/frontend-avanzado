import {User} from '../../models/user.model';
import {All, UserActionTypes} from './user.actions';
import {Study} from '../../models/study.model';



export interface UserState {
    isAuth: boolean;
    user: User | null;
    id: number | null;
    error: string | null;
}

const initUserState: UserState = {
    isAuth: false,
    user: null,
    id: null,
    error: null,
};


export function UserReducer(state = initUserState, action: All): UserState {
    switch (action.type) {
        case UserActionTypes.LOGIN_SUCCESS: {
            return {
                ...state,
                isAuth: true,
                user: action.user,
                error: null
            };
        }
        case UserActionTypes.LOGIN_FAILURE: {
            return {
                ...state,
                error: 'Incorrect email and/or password.'
            };
        }

        case UserActionTypes.SAVE_USER: {
            return {
                ...state,
                isAuth: true,
                user: action.user,
                error: null
            };
        }

        case UserActionTypes.CARGAR_STUDIE: {
            return {
                ...state,
                isAuth: true,
                id: action.id,
                error: null
            };
        }
        case UserActionTypes.SAVE_STUDIE: {
            return {
                ...state,
                isAuth: true,
                user: action.user,
                error: null
            };
        }

        default: {
            return state;
        }
    }
}

