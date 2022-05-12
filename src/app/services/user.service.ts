import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IUser} from "../models/IUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IUser[]> {
    return this.http
      .get<any[]>(this.url);
  }

  getById(id: number): Observable<IUser> {
    return this.http
      .get<any>(`${this.url}/${id}`);
  }

}
