import { formatDate } from '@angular/common';
import { AbstractControl, ValidationErrors } from '@angular/forms';

export function ageValidator(
  control: AbstractControl
): ValidationErrors | null {
  const formatBD =
    control.value && formatDate(control.value, 'yyyy/MM/dd', 'en-US');
  const getYearBD: number = formatBD && Number(formatBD.split('/')[0]);
  const currentYear = new Date().getFullYear();

  if (currentYear - getYearBD < 3) {
    return { ageValid: true };
  }
  return null;
}
