import { Component } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
})
export class PaginatorComponent {
  activePage: number = 1;

  setActivePage(page: number) {
    this.activePage = page;
  }
}
