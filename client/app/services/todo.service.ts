import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class TodosService {
    constructor(private _http: Http) {

    }

    getTodo() {
        return this._http.get('/api/v1/todo').map(res => res.json());
    }
    saveTodo(text: any) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/api/v1/todo', JSON.stringify(text), { headers: headers })
            .map(res => res.json());
    }
    
    updateTodo(todo:any) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.put('/api/v1/todo/'+todo._id, JSON.stringify(todo), { headers: headers })
            .map(res => res.json());
    }
}