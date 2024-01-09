import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.scss',
})
export class MyAccountComponent {
  activeNavItem: string = 'information';

  constructor(public authService: AuthService, private router: Router) {}

  handleNavActive(item: string) {
    this.activeNavItem = item;
    this.router.navigateByUrl(`/my-account/${item}`);
  }
}
