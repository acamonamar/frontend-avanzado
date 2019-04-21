import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';
import {AppSettings} from '../app.settings';


@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {}

    getToken(): string {
        return localStorage.getItem('token');
    }

    logIn(email: string, password: string): Observable<any> {
        const url = `${AppSettings.API_ENDPOINT}/login`;
        return this.http.post<User>(url, {email, password});
    }

    signUp(email: string, password: string): Observable<User> {
        const url = `${AppSettings.API_ENDPOINT}/register`;
        return this.http.post<User>(url, {email, password});
    }

    getStatus(): Observable<User> {
        const url = `${AppSettings.API_ENDPOINT}/status`;
        return this.http.get<User>(url);
    }
}
