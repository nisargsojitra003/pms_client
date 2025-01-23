import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true,
    },
    provideNativeDateAdapter()
  ],
})
export class DateInputComponent implements ControlValueAccessor {
  @Input() label: string = 'Select Date';
  @Input() isRequired: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() isReadOnly: boolean = false;
  @Input() minDate: Date | string = '1950-01-01';
  @Input() maxDate: Date | string = '2150-01-01';
  @Input() dateValue: string | null = null;

  private onChange: (value: string | null) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: string | null): void {
    this.dateValue = value;
  }

  registerOnChange(fn: (value: string | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onInputChange(value: string): void {
    this.dateValue = value;
    this.onChange(value);
  }

  onBlur(): void {
    this.onTouched();
  }
}
