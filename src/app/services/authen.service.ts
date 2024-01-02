import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private data: any[];

  constructor(private http: HttpClient) {}

  addNewUser(user: any) {
    return this.http.post('', user).subscribe();
  }
}
