import { Component } from '@angular/core';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.scss',
})
export class TestsComponent {
  activeTestItem: string = 'all-tests';
  activeNavItem: string = 'all-tests';
  activeYearItem: number = 2023;

  setTestActive(item: string) {
    this.activeTestItem = item;
  }

  setNavActive(item: string) {
    this.activeNavItem = item;
  }

  setYearActive(item: number) {
    this.activeYearItem = item;
  }
}
