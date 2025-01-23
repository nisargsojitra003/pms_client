import {
  Component,
  Input,
  forwardRef,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  NgControl,
} from '@angular/forms';
import { ValidationMessagesService } from '../../services/validation-messages.service';

@Component({
  selector: 'app-custom-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true,
    },
  ],
})
export class TextInputComponent
  implements ControlValueAccessor, OnInit, AfterViewInit
{
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() isRequired: boolean = true;
  @Input() pattern: string = '';
  @Input() maxLength: number | string = '';
  @Input() placeholder: string = '';
  @Input() name: string = '';
  @Input() control: NgControl | any;
  @Input() isAppNumericValidator : boolean = false;
  @Input() isDecimalNumericValidator : boolean = false;

  value: any = '';
  errorMessage: string = '';

  constructor(private validationMessageService: ValidationMessagesService) {}

  ngOnInit(): void {
    this.errorMessage = '';
  }

  ngAfterViewInit(): void {
    if (this.control && this.control.valueChanges) {
      this.control.statusChanges.subscribe(() => {
        this.updateErrorMessage();
      });
    }
  }

  writeValue(value: any): void {
    if (value) {
      this.value = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  getErrorMessage(): string {
    if (
      this.control &&
      this.control.invalid &&
      (this.control.dirty || this.control.touched)
    ) {
      return (
        this.validationMessageService.getValidationMessage(this.control,this.label) ?? ''
      );
    }
    //console.log('empty');
    return '';
  }

  setControl(control: NgControl) {
    this.control = control;
  }

  onBlur(): void {
    const abstractControl = this.control?.control;

    if (abstractControl) {
      if (this.isRequired && this.value.trim() === '') {
        abstractControl.setErrors({ required: true });
      } else if (abstractControl.errors?.['required']) {
        abstractControl.setErrors(null);
      }
    }
    this.onTouched();
    this.updateErrorMessage();
  }

  private updateErrorMessage(): void {
    if (this.control) {
      this.errorMessage =
        this.validationMessageService.getValidationMessage(
          this.control,
          this.label
        ) ?? '';
      //console.log('error 1', this.errorMessage);
    } else {
      this.errorMessage = '';
      //console.log('error 2', this.errorMessage);
    }
  }
}
