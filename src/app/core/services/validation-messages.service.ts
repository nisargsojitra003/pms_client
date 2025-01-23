import { Injectable } from '@angular/core';
import { NgControl } from '@angular/forms';
import { VALIDATION_MESSAGES } from '../constants/validationMessages';

@Injectable({
  providedIn: 'root',
})
export class ValidationMessagesService {
  getValidationMessage(control: NgControl, element:string): string | null {
    if (!control || !control.errors) return null;

    if (control.errors['required']) {
      return VALIDATION_MESSAGES.required(element);
    }

    if (control.errors['pattern']) {
      return VALIDATION_MESSAGES.pattern;
    }

    if (control.errors['maxlength']) {
      return VALIDATION_MESSAGES.maxLength;
    }

    return null;
  }
  
  // getErrorMessage(control: any, showControl: string): string | null {
  //   if (control.errors) {
  //     // Handling various error types
  //     if (control.errors['required']) {
  //       return `${showControl} is required`;
  //     }
  //     if (control.errors['pattern']) {
  //       return `Please enter a valid ${showControl}`;
  //     }
  //     if (control.errors['mismatch']) {
  //       return `Password does not match`;
  //     }
  //     if (control.errors['resetmatch']) {
  //       return `New Password Should not be the same as Old`;
  //     }
  //     if (control.errors['email']) {
  //       return `Email is invalid`;
  //     }
  //     if (control.errors['invalidHolidayDate']) {
  //       return `Select a current or above year Date`;
  //     }
  //     if (control.errors['invalidFormatDate']) {
  //       return `Date format is not valid`;
  //     }
  //     if (control.errors['dateRangeInvalid']) {
  //       return 'End Date must be later than Start Date';
  //     }
  //     if (control.errors['max']) {
  //       return `The value must not exceed ${control.errors.max.max}`;
  //     }
  //     if (control.errors['maxlength']) {
  //       return 'Exceeding max length';
  //     }
  //     if (control.errors['min']) {
  //       return 'Invalid minimum value';
  //     }
  //     if (control.errors['invalidPassword']) {
  //       return 'Password should be strong';
  //     }
  //     if (control.errors['emailAlreadyExist']) {
  //       return 'Email already exists';
  //     }
  //     if (control.errors['oldPasswordNotMatch']) {
  //       return '*Old Password is incorrect';
  //     }
  //   }
  //   return null;
  // }
}
