import { Component } from '@angular/core';

@Component({
  selector: 'app-social-link',
  templateUrl: './social-link.component.html',
  styleUrl: './social-link.component.scss',
})
export class SocialLinkComponent {
  signInGoogle() {
    const width = 600;
    const height = 500;
    let x = window.innerWidth / 2 - width / 2;
    let y = window.innerHeight / 2 - height / 2;

    if (window.top) {
      x = window.top.outerWidth / 2 + window.top.screenX - width / 2;
      y = window.top.outerHeight / 2 + window.top.screenY - height / 2;
    }

    const options = `width=${width},height=${height},left=${x},top=${y}`;
    window.open('https://accounts.google.com/', 'Gmail', options);
  }

  signInGithub() {
    console.log('sign in github');
  }

  signInLinkedin() {
    console.log('sign in linkedin');
  }
}
