import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-time-input',
  templateUrl: './time-input.component.html',
  styleUrl: './time-input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TimeInputComponent),
      multi: true,
    },
    provideNativeDateAdapter()
  ],
})
export class TimeInputComponent {
  @Input() label: string = 'Select time';
  @Input() timeFormat: 12 | 24 = 12;
  @Input() isRequired: boolean = true;
  @Input() isDisabled: boolean = false;
  @Input() isEnableUserTyping : boolean = false;
  @Input() isReadOnly : boolean = false;

  timeValue: string | null = null;

  private onChange: (value: string | null) => void = () => { };
  private onTouched: () => void = () => { };

  writeValue(value: string | null): void {
    this.timeValue = value;
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
    this.timeValue = value;
    this.onChange(value);
  }

  onBlur(): void {
    this.onTouched();
  }
}
