import { Action } from '@ngrx/store';
import {User} from '../../models/user.model';


export enum UserActionTypes {
    LOGIN = '[Auth] Login',
    LOGIN_SUCCESS = '[Auth] Login Success',
    LOGIN_FAILURE = '[Auth] Login Failure',
    SAVE_USER = '[User] Save User',
    CARGAR_STUDIE = '[Studie] Cargar Studie',
    SAVE_STUDIE = '[Studie] Save Studie',
    SAVE_LANGUAGE = '[Language] Save Language',
}

// LOGIN
export class LogIn implements Action {
    readonly type = UserActionTypes.LOGIN;
    constructor(public user: any) {}
}

export class LogInSuccess implements Action {
    readonly type = UserActionTypes.LOGIN_SUCCESS;
    constructor(public user: any) {}
}

export class LogInFailure implements Action {
    readonly type = UserActionTypes.LOGIN_FAILURE;
    constructor(public user: any) {}
}

// GUARDAR USUARIO

export class SaveUser implements Action {
    readonly type = UserActionTypes.SAVE_USER;
    constructor(public user: any) {}
}

// GUARDAR FORMACIÓN
export class CargarStudie implements Action{
    readonly  type = UserActionTypes.CARGAR_STUDIE;
    constructor(public id: number) {}
}

export class SaveStudie implements Action {
    readonly type = UserActionTypes.SAVE_STUDIE;
    constructor(public user: any) {}
}

// GUARDAR IDIOMA

export class SaveLanguage implements Action {
    readonly type = UserActionTypes.SAVE_LANGUAGE;
    constructor(public language: any) {}
}




export type All =
    | LogIn
    | LogInSuccess
    | LogInFailure
    | SaveUser
    | CargarStudie
    | SaveStudie
    | SaveLanguage
    ;
