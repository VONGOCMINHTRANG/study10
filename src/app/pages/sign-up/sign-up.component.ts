import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ageValidator } from './sign-up.validator';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  signUpForm: FormGroup;
  isSubmitted: boolean = false;
  hide: boolean = true;
  fullNamePattern = '^[^0-9!@#$%^&*()+=\\-\\[\\]\\\\\';,./{}|":<>?~_]*$';
  passwordPattern = '^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z!@#$%^&*]{8,}$';
  phonePattern = '0[0-9]{9}';

  constructor(private router: Router, private fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      fullName: [
        null,
        [Validators.required, Validators.pattern(this.fullNamePattern)],
      ],
      email: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [Validators.required, Validators.pattern(this.passwordPattern)],
      ],
      phone: [
        null,
        [Validators.required, Validators.pattern(this.phonePattern)],
      ],
      birthDay: [null, [Validators.required, ageValidator]],
      gender: [null, [Validators.required]],
    });
  }

  signUp() {
    this.isSubmitted = true;
    if (!this.signUpForm.valid) {
      return;
    }

    const currentDate: string = formatDate(new Date(), 'yyyy/MM/dd', 'en-US')
      .split('/')
      .join('-');

    const DOB: string = formatDate(
      this.signUpForm.controls['birthDay'].value,
      'yyyy/MM/dd',
      'en-US'
    )
      .split('/')
      .join('-');

    const signUpData = {
      fullName: this.signUpForm.controls['fullName'].value,
      email: this.signUpForm.controls['email'].value,
      password: this.signUpForm.controls['password'].value,
      phone: this.signUpForm.controls['phone'].value,
      birthDay: DOB,
      gender: Number(this.signUpForm.controls['gender'].value),
      role: 'USER',
      createdAt: currentDate,
    };

    console.log(signUpData);
  }

  signIn() {
    this.router.navigateByUrl('/sign-in');
  }

  signUpGoogle() {
    console.log('sign up with google');
  }

  signUpFacebook() {
    console.log('sign up facebook');
  }
}
