import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SigninService {
    base_url = 'http://localhost:4200/api/';
    task_endpoint = 'users';
    constructor ( private http: HttpClient ) { }

    getUser() {
        return this.http.get<any>(this.base_url + this.task_endpoint);
    }

}
