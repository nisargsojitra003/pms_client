import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validator, AbstractControl, ValidationErrors, NgControl } from '@angular/forms';

@Component({
  selector: 'app-check-box-input',
  templateUrl: './check-box-input.component.html',
  styleUrls: ['./check-box-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckBoxInputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CheckBoxInputComponent),
      multi: true,
    },
  ],
})
export class CheckBoxInputComponent implements ControlValueAccessor, Validator {
  @Input() isRequired: boolean = false;
  @Input() isIndeterminate: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() title: string = '';
  @Input() labelText: string = '';
  @Input() color: 'primary' | 'warn' | 'accent' = 'primary';
  @Output() newEvent = new EventEmitter<any>();
  @Input() control: NgControl | any;

  value: boolean | null = null;

  onChange: (value: boolean | null) => void = () => { };
  onTouched: () => void = () => { };

  setValue(value: boolean | null): void {
    this.value = value;
    this.onChange(this.value);
    this.onTouched();
  }

  onCheckboxChange(event: any): void {
    this.setValue(event.checked);
  }

  writeValue(value: boolean | null): void {
    this.value = value;
  }

  registerOnChange(fn: (value: boolean | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (this.isRequired && !this.value) {
      return { required: true };
    }
    return null;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
