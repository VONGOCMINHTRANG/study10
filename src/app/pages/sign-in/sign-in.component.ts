import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  signInForm: FormGroup;
  hide: boolean = true;
  passwordPattern = '^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z!@#$%^&*]{8,}$';

  constructor(private router: Router, private fb: FormBuilder) {
    this.signInForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [Validators.required, Validators.pattern(this.passwordPattern)],
      ],
    });
  }

  signIn() {
    if (!this.signInForm.valid) {
      return;
    }

    const signInData = {
      email: this.signInForm.controls['email'].value,
      password: this.signInForm.controls['password'].value,
    };

    console.log(signInData);
  }

  signUp() {
    this.router.navigateByUrl('/sign-up');
  }

  signInGoogle() {
    console.log('sign in with google');
  }

  signInFacebook() {
    console.log('sign in facebook');
  }
}
