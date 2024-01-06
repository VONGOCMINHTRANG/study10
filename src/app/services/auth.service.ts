import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Information } from '../interfaces';
import { Observable, of } from 'rxjs';

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

  isLoggedIn(): boolean {
    if (typeof window !== 'undefined') {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        return true;
      }
      return false;
    }
    return true;
  }

  isLoggedInV2(): Observable<boolean> {
    if (typeof window !== 'undefined') {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        return of(true);
      }
      return of(false);
    }
    return of(true);
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

  handleLogout(): Observable<any> {
    return this.http.get<any>('http://localhost:8081/api/auth/logout');
  }
}
