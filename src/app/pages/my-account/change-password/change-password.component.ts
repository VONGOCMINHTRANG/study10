import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ageValidator } from '../../../validators/age.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss',
})
export class ChangePasswordComponent {
  updateForm: FormGroup;
  activeNavItem: string = 'information';
  passwordPattern = '^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z!@#$%^&*]{8,}$';
  phonePattern = '0[0-9]{9}';
  isSubmitted: boolean = false;
  hide: boolean = true;

  constructor(private router: Router, private fb: FormBuilder) {
    this.updateForm = this.fb.group({
      password: [
        null,
        [Validators.required, Validators.pattern(this.passwordPattern)],
      ],
      newPassword: [
        null,
        [Validators.required, Validators.pattern(this.passwordPattern)],
      ],
      retypePassword: [
        null,
        [Validators.required, Validators.pattern(this.passwordPattern)],
      ],
    });
  }

  handleNavActive(item: string) {
    this.activeNavItem = item;
    this.router.navigateByUrl(`/my-account/${item}`);
  }

  update() {
    this.isSubmitted = true;
    if (!this.updateForm.valid) {
      return;
    }

    const updateData = {
      newPassword: this.updateForm.controls['newPassword'].value,
    };

    console.log('updateData >>>', updateData);
  }
}
