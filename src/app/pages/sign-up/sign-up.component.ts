import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ageValidator } from '../../validators/age.validator';
import { formatDate } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { IconDialog } from '../../interfaces';
import { MatInput } from '@angular/material/input';

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
  @ViewChild('fullNameField') fullNameField: MatInput;

  ngAfterViewInit(): void {
    this.fullNameField.focus();
  }

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private dialog: MatDialog,
    private readonly changeDetectorRef: ChangeDetectorRef
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

    this.authService.handleSignUp(signUpData).subscribe({
      next: (response: any) => {
        const data = response.data;
        const accessToken = data.accessToken;
        localStorage.setItem('user', JSON.stringify(data));
        localStorage.setItem('accessToken', JSON.stringify(accessToken));

        this.dialog.open(DialogComponent, {
          data: {
            icon: IconDialog.SUCCESS,
            title: 'Đăng ký thành công',
            message: 'Xin chào bạn!',
          },
        });

        this.router.navigateByUrl('/');
      },
      error: () => {
        this.dialog.open(DialogComponent, {
          data: {
            icon: IconDialog.ERROR,
            title: 'Email đã được đăng ký',
            message: 'Xin vui lòng chọn email khác!',
          },
        });
      },
    });
  }

  signIn() {
    this.router.navigateByUrl('/sign-in');
  }

  signInGoogle() {
    console.log('sign in with google');
  }

  signInFacebook() {
    console.log('sign in facebook');
  }

  signInLinkedin() {
    console.log('sign in linkedin');
  }
}
