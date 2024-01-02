import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-study10';
  @ViewChild('contentWrapper') contentWrapper!: ElementRef;

  addClassBlur(isOpenMenu: boolean) {
    if (isOpenMenu === true) {
      this.contentWrapper.nativeElement.classList.add('blur');
    } else {
      this.contentWrapper.nativeElement.classList.remove('blur');
    }
  }
}
