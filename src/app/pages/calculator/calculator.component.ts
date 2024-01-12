import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent {
  activeNavItem: string = 'ielts';

  constructor(public authService: AuthService, private router: Router) {
    const urlNavItem = this.router.url.split('/')[2];
    if (urlNavItem != null) {
      this.activeNavItem = urlNavItem;
    } else {
      this.activeNavItem;
    }
  }

  handleNavActive(item: string) {
    this.activeNavItem = item;
    this.router.navigateByUrl(`/calculator/${item}`);
  }
}
