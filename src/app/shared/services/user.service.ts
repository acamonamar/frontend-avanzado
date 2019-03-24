import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/toPromise';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    // private headers = new Headers({ 'Content-Type': 'application/json' });
    base_url = 'http://localhost:4200/api/users';
    constructor ( private http: HttpClient ) { }

    getUsers (): Observable<User[]> {
        return this.http.get<User[]>(this.base_url);
    }

    getUser(id: number): Observable<User> {
        const url = `${this.base_url}/${id}`;
        return this.http.get<User>(url);
    }

    updateUser (user: User): Observable<any> {
        return this.http.put(this.base_url, user, this.httpOptions);
    }

    /* update(user: User): Promise<User> {
        const url = `${this.base_url}/${user.id}`;
        return this.http
            .put(url, JSON.stringify(user), { headers: this.headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }*/

}
