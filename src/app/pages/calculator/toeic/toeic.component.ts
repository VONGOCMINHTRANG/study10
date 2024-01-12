import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { toeicDataListening, toeicDataReading } from './toeic-data';

@Component({
  selector: 'app-toeic',
  templateUrl: './toeic.component.html',
  styleUrl: './toeic.component.scss',
})
export class CalculatorToeicComponent {
  calculateToeicForm: FormGroup;
  activeNavItem: string = 'overall';
  scorePattern: string = '^[0-9]*$';
  @ViewChild('listeningField') emailField: MatInput;
  displayedColumns: string[] = ['rawScore', 'scaledScore'];
  dataListening = toeicDataListening;
  dataReading = toeicDataReading;

  constructor(private fb: FormBuilder) {
    this.calculateToeicForm = this.fb.group({
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
