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
export class StudieService {
    base_url = 'http://localhost:4200/api/users';
    constructor ( private http: HttpClient ) { }

    getUsers (): Observable<User[]> {
        return this.http.get<User[]>(this.base_url);
    }

    getUser(uid: number): Observable<User> {
        const url = `${this.base_url}/${uid}`;
        return this.http.get<User>(url);
    }

    /** DELETE: delete the hero from the server */
    deleteUser (studie: Studie | number): Observable<Studie> {
        const id = typeof studie === 'number' ? studie : studie.sid;
        const url = `${this.base_url}/${id}`;

        return this.http.delete<Studie>(url, httpOptions);
    }

}
