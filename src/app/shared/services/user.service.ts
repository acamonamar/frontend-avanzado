import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Studie } from "../models/studie";
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/toPromise';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class UserService {
    base_url = 'http://localhost:4200/api/users';
    constructor ( private http: HttpClient ) { }

    getUsers (): Observable<User[]> {
        return this.http.get<User[]>(this.base_url);
    }

    getUser(id: number): Observable<User> {
        const url = `${this.base_url}/${id}`;
        return this.http.get<User>(url);
    }


    /** DELETE: delete the hero from the server */
    deleteUser (studie: Studie | number): Observable<Studie> {
        const id = typeof studie === 'number' ? studie : studie.sid;
        const url = `${this.base_url}/${id}`;

        return this.http.delete<Studie>(url, httpOptions);
    }

    /** PUT: update the hero on the server */
    updateUser (user: User): Observable<any> {
        return this.http.put(this.base_url, user, httpOptions);
    }

}
