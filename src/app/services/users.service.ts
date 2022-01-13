import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsersTable } from '../models/table.model';

@Injectable({ providedIn: 'root'})
export class UsersService {
link: string;
constructor(private http: HttpClient) {
  this.link = 'https://randomuser.me/api/?page=3&results=16&seed=abc'

 }

 getUsers(){
  return this.http.get<UsersTable>(this.link);
}

getUsersTable(){
  return this.http.get<any>(this.link);
}
}
