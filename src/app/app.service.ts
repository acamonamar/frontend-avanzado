import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class AppService {
    base_url = 'http://localhost:4200/';
        tasks_endpoint = 'users';
    constructor(private http: Http) {}
/* Gets all tasks */
    getTasks() {
        return this.http
            .get(this.base_url + this.tasks_endpoint)
            .map(res => res.json());
    }
/* Creates a task */
    createTask(task) {
        return this.http
            .post(this.base_url + this.tasks_endpoint, task)
            .map(res => res.json());
    }
/* Updates a Task */
    updateTask(update) {
        return this.http
            .put(this.base_url + this.tasks_endpoint, update)
            .map(res => res.json());
    }
/* Deletes a Task */
    deleteTask(taskId) {
        return this.http
            .delete(`${this.base_url + this.tasks_endpoint}/${taskId}`)
            .map(res => res.json());
    }
}
