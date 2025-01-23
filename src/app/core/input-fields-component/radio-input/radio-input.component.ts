import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { RadioButtonItem } from '../../interfaces/radioButtonItem.interface';

@Component({
  selector: 'app-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioInputComponent),
      multi: true,
    },
  ],
})
export class RadioInputComponent implements ControlValueAccessor {
  private innerValue: string | number | boolean = '';

  nextUniqueId: number = 0;
  private _name: string = `group-${this.nextUniqueId++}`;

  @Input() options: RadioButtonItem[] | undefined;
  @Input() label: string = '';
  @Input() isRequired: boolean = true;
  @Input() control: NgControl | any;

  radiovalue: any = '';
  errorMessage: string = '';

  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  public get value(): string | number | boolean {
    return this.innerValue;
  }

  set value(v: string | number | boolean) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.change(v);
    }
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: string | number | boolean): void {
    if (value !== undefined && value !== null) {
      this.innerValue = value;
      this.radiovalue = value;
    }
  }
  
  registerOnChange(fn: (value: string | number | boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  change(value: string | number | boolean) {
    this.innerValue = value;
    this.onChange(value);
    this.onTouched();
  }
}
