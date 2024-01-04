import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Information } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  options = {
    withCredentials: true,
    headers: this.headers,
  };

  constructor(private http: HttpClient) {}

  handleSignUp(user: Information) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const options = {
      withCredentials: true,
      headers: headers,
    };

    return this.http.post(
      'http://localhost:8081/api/auth/register-v2',
      user,
      options
    );
  }

  handleSignIn(user: Information) {
    return this.http.post(
      `http://localhost:8081/api/auth/login`,
      user,
      this.options
    );
  }

  handleRefreshAccessToken(): Observable<any> {
    return this.http.get<any>('http://localhost:8081/api/auth/refresh_token');
  }
}
