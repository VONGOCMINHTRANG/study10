import { Component } from '@angular/core';

@Component({
  selector: 'app-social-link',
  templateUrl: './social-link.component.html',
  styleUrl: './social-link.component.scss',
})
export class SocialLinkComponent {
  signInGoogle() {
    console.log('sign in with google');
  }

  signInGithub() {
    console.log('sign in github');
  }

  signInLinkedin() {
    console.log('sign in linkedin');
  }
}
