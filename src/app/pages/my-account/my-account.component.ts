import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
})
export class MyAccountComponent {
  constructor(public authService: AuthService, private router: Router) {}
}
