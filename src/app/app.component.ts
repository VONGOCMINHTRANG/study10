import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-study10';

  isAdmin: boolean = false;

  constructor(private authService: AuthService) {
    if (this.authService.isLoggedIn()) {
      this.isAdmin = true;
    }
  }
}
