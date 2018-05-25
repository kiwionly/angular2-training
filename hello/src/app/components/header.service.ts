import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../modules/customer/components/customer-list-page/customer-list-page.component';



export interface DataType {
  UserId: number;
  Id: number;
  Title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http: HttpClient) { }

  getAll() {
    return [{id: 1, title: 'hhaha'}, {id: 2, title: 'ehehea'}];
  }

  get() {
    return this.http.get<DataType[]>(environment.url + '/posts');
  }

  getUser() {
    return this.http.get<User[]>(environment.url + '/users');
  }

  getUserDetail(id: string) {
    return this.http.get<User[]>(environment.url + '/users/' + id);
  }

}
