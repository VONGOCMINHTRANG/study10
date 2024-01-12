import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { ieltsDataListening, ieltsDataReading } from './ielts-data';

@Component({
  selector: 'app-ielts',
  templateUrl: './ielts.component.html',
  styleUrl: './ielts.component.scss',
})
export class CalculatorIeltsComponent {
  calculateIeltsForm: FormGroup;
  activeNavItem: string = 'overall';
  scorePattern: string = '^[0-9]*$';
  @ViewChild('listeningField') emailField: MatInput;
  displayedColumns: string[] = ['rawScore', 'scaledScore'];
  dataListening = ieltsDataListening;
  dataReading = ieltsDataReading;

  constructor(private fb: FormBuilder) {
    this.calculateIeltsForm = this.fb.group({
      listening: [
        null,
        [Validators.required, Validators.pattern(this.scorePattern)],
      ],
      reading: [
        null,
        [Validators.required, Validators.pattern(this.scorePattern)],
      ],
      writing: [
        null,
        [Validators.required, Validators.pattern(this.scorePattern)],
      ],
      speaking: [
        null,
        [Validators.required, Validators.pattern(this.scorePattern)],
      ],
    });
  }

  handleNavItem(item: string) {
    this.activeNavItem = item;
  }

  calculate() {}
}
