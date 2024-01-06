import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../app.component.scss'],
})
export class HomeComponent {
  @ViewChild('contentWrapper') contentWrapper!: ElementRef;

  constructor(public authService: AuthService) {}

  addClassBlur(isOpenMenu: boolean) {
    if (isOpenMenu === true) {
      this.contentWrapper.nativeElement.classList.add('blur');
    } else {
      this.contentWrapper.nativeElement.classList.remove('blur');
    }
  }

  checkToken() {
    this.authService
      .handleRefreshAccessToken()
      .subscribe((res) => console.log(res));
  }
}
