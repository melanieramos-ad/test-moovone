import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_URL = 'https://app.fakejson.com/q/hUU5atyP';
  private readonly token = '5vFkfkKvT9DnRZNyp8vIEg';

  constructor(private http: HttpClient) {}

  getUser(): Observable<User> {
    return this.http.get<User>(this.API_URL, {
      params: {
        token: this.token
      }
    });
  }
}
