import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ageValidator } from './sign-up.validator';
import { formatDate } from '@angular/common';
import { AuthService } from '../../services/auth.service';

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

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
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
      phoneNumber: this.signUpForm.controls['phone'].value,
      birthDate: DOB,
      gender: Number(this.signUpForm.controls['gender'].value),
    };
    console.log(signUpData);

    this.authService.handleSignUp(signUpData).subscribe({
      next: (response: any) => console.log('Sign up >>>', response),
      error: (response: any) =>
        console.log('Sign in err >>>', response.error.message),
    });
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
