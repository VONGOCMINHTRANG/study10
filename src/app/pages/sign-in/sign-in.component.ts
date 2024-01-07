import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { IconDialog } from '../../interfaces';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  signInForm: FormGroup;
  hide: boolean = true;
  passwordPattern = '^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z!@#$%^&*]{8,}$';
  @ViewChild('emailField') emailField: MatInput;

  ngAfterViewInit(): void {
    this.emailField.focus();
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

    this.authService.handleSignIn(signInData).subscribe({
      next: (response: any) => {
        const data = response.data;
        const accessToken = data.accessToken;
        localStorage.setItem('user', JSON.stringify(data));
        localStorage.setItem('accessToken', JSON.stringify(accessToken));

        this.dialog.open(DialogComponent, {
          data: {
            icon: IconDialog.SUCCESS,
            title: 'Đăng nhập thành công',
            message: 'Xin chào bạn!',
          },
        });

        this.router.navigateByUrl('/');
      },
      error: () => {
        this.dialog.open(DialogComponent, {
          data: {
            icon: IconDialog.ERROR,
            title: 'Vui lòng kiểm tra lại',
            message: 'Email hoặc mật khẩu không chính xác!',
          },
        });
      },
    });
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

  signInLinkedin() {
    console.log('sign in linkedin');
  }
}
