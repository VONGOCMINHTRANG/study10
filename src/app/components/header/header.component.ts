import {
  Component,
  Output,
  ViewChild,
  EventEmitter,
  ElementRef,
} from '@angular/core';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() handleMenu = new EventEmitter<boolean>();
  @ViewChild(MatMenuTrigger) clickHoverMenuTrigger!: MatMenuTrigger;
  @ViewChild('container') container!: ElementRef;
  @ViewChild('menu') menu!: MatMenu;

  menuOpened(isOpenMenu: boolean) {
    this.handleMenu.emit(isOpenMenu);
  }

  menuClosed(isOpenMenu: boolean) {
    this.handleMenu.emit(isOpenMenu);
  }
}
