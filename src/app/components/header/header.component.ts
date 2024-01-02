import {
  Component,
  Output,
  ViewChild,
  EventEmitter,
  ElementRef,
  HostListener,
} from '@angular/core';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';

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

  menuOpened(isOpenMenu: boolean) {
    this.handleMenu.emit(isOpenMenu);
  }

  menuClosed(isOpenMenu: boolean) {
    this.handleMenu.emit(isOpenMenu);
  }
}
