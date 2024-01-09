import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ageValidator } from '../../../validators/age.validator';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrl: './information.component.scss',
})
export class InformationComponent {
  updateForm: FormGroup;
  activeNavItem: string = 'information';
  fullNamePattern = '^[^0-9!@#$%^&*()+=\\-\\[\\]\\\\\';,./{}|":<>?~_]*$';
  passwordPattern = '^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z!@#$%^&*]{8,}$';
  phonePattern = '0[0-9]{9}';
  isSubmitted: boolean = false;

  constructor(private router: Router, private fb: FormBuilder) {
    this.updateForm = this.fb.group({
      fullName: [
        null,
        [Validators.required, Validators.pattern(this.fullNamePattern)],
      ],
      email: [null, [Validators.required, Validators.email]],
      phone: [
        null,
        [Validators.required, Validators.pattern(this.phonePattern)],
      ],
      birthDay: [null, [Validators.required, ageValidator]],
      gender: [null, [Validators.required]],
      avatar: [null],
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

    const DOB: string = formatDate(
      this.updateForm.controls['birthDay'].value,
      'yyyy/MM/dd',
      'en-US'
    )
      .split('/')
      .join('-');

    const filePath = this.updateForm.controls['avatar'].value;
    const filePathFormat = filePath.substring(filePath.lastIndexOf('\\') + 1);

    const updateData = {
      fullName: this.updateForm.controls['fullName'].value,
      email: this.updateForm.controls['email'].value,
      phoneNumber: this.updateForm.controls['phone'].value,
      gender: Number(this.updateForm.controls['gender'].value),
      birthDate: DOB,
      avatar: filePathFormat,
    };

    console.log('updateData >>>', updateData);
  }
}
