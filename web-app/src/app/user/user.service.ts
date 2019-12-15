import { User } from './user.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = '/rest/user';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}`)
    .pipe(delay(500));
  }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createUser(newUser: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`, newUser);
  }

  updateUser(id: number, userInfo: object): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, userInfo);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
