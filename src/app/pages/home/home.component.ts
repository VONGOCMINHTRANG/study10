import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../app.component.scss'],
})
export class HomeComponent {
  @ViewChild('contentWrapper') contentWrapper!: ElementRef;

  addClassBlur(isOpenMenu: boolean) {
    if (isOpenMenu) {
      this.contentWrapper.nativeElement.classList.add('blur');
    } else {
      this.contentWrapper.nativeElement.classList.remove('blur');
    }
  }
}
