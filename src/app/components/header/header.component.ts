import { AuthService } from './../../services/auth.service';
import {
  Component,
  Output,
  ViewChild,
  EventEmitter,
  ElementRef,
  HostListener,
} from '@angular/core';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { ColorNotice } from '../../interfaces';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() handleMenu = new EventEmitter<boolean>();
  @ViewChild('container') container!: ElementRef;
  @ViewChild('menu') menu!: MatMenu;
  @ViewChild(MatMenuTrigger) clickHoverMenuTrigger!: MatMenuTrigger;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // Nếu từ 993px trở lên, thì đóng menu!: MatMenu
    if (event.target.innerWidth >= 993) {
      this.clickHoverMenuTrigger.closeMenu();
    }
  }

  constructor(public authService: AuthService, private router: Router) {}

  menuOpened(isOpenMenu: boolean) {
    this.handleMenu.emit(isOpenMenu);
  }

  menuClosed(isOpenMenu: boolean) {
    this.handleMenu.emit(isOpenMenu);
  }

  signOut() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');

    this.authService.handleLogout().subscribe(() => {
      Swal.fire({
        title: 'Đăng xuất thành công',
        icon: 'success',
        showCancelButton: false,
        showConfirmButton: true,
        confirmButtonColor: ColorNotice.SUCCESS,
        confirmButtonText: 'Đồng ý',
      });

      this.router.navigateByUrl('/');
    });
  }
}
