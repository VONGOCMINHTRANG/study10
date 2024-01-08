import { Component } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrl: './all.component.scss',
})
export class AllHomeContentComponent {
  getJoinNow() {
    window.open('https://www.facebook.com/groups/studieswithme', '_blank');
  }
}
