import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(private router: Router) {}

  redirectToPage(item: string) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.router.navigateByUrl(`/${item}`);
  }

  redirectToLink(link: string) {
    window.open(`${link}`, '_blank');
  }
}
