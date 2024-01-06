import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.scss',
})
export class TestsComponent {
  activeTestItem: string = 'all-tests';
  activeNavItem: string = 'all-tests';
  activeYearItem: number = 2023;

  constructor(private router: Router) {}
  handleTestActive(item: string) {
    this.activeTestItem = item;
  }

  handleNavActive(item: string, link?: string) {
    this.activeNavItem = item;
    this.router.navigateByUrl(`/tests/${link}`);
  }

  handleYearActive(item: number) {
    this.activeYearItem = item;
  }
}
