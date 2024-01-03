import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Information } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  handleSignIn(user: Information) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const options = {
      withCredentials: true,
      headers: headers,
    };

    return this.http.post(
      'http://localhost:8081/api/auth/login',
      user,
      options
    );
  }
}
