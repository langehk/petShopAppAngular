import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthenticationService } from './authentication.service';
import { TodoItem } from '../_models/todoitem';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class TodoItemService {
  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getItems(): Observable<TodoItem[]> {
    // add authorization header with jwt token
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    // get users from api
    return this.http.get<TodoItem[]>(environment.apiUrl + '/api/todo/', httpOptions);
  }
}
