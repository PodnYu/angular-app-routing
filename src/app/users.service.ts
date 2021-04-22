import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {};
}

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return [];
  }
}
