import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

@Injectable({ providedIn: 'root' })
export class SigninService {
    base_url = 'api/users';
    constructor ( private http: HttpClient ) { }

    /*getUsers() {
        return this.http.get<any>(this.base_url + this.task_endpoint);
    }*/

    getUsers (): Observable<User[]> {
        return this.http.get<User[]>(this.base_url);
    }

    /*getUser(uid: number) {
        return this.http.get(this.base_url + this.task_endpoint + uid, { })
            .map((res: Response) => res.json());
    }*/
    getUser(uid: number): Observable<User> {
        const url = `${this.base_url}/${uid}`;
        return this.http.get<User>(url);
    }
    /*getUser(uid: number): Promise<User> {
        const url = `${this.base_url}/${uid}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response as User);
    }*/


}
