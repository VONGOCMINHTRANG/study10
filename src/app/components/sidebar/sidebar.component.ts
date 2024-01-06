import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  getSharedEnglishGroup() {
    window.open(
      'https://www.facebook.com/groups/dilam.hoctienganh/?ref=web_social_plugin',
      '_blank'
    );
  }

  getSharedIeltsGroup() {
    window.open(
      'https://www.facebook.com/groups/study4.ielts/?ref=web_social_plugin',
      '_blank'
    );
  }

  getSharedToeicGroup() {
    window.open('https://www.facebook.com/groups/onthitoeic990', '_blank');
  }
}
