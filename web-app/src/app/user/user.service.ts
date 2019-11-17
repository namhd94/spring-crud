import { User } from './user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = '/rest/user';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createUser(newUser: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, newUser);
  }
}
