import {
  AfterViewInit,
  Component,
  forwardRef,
  Input,
  OnInit,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { ValidationMessagesService } from '../../services/validation-messages.service';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectInputComponent),
      multi: true,
    },
  ],
})
export class SelectInputComponent implements ControlValueAccessor, OnInit, AfterViewInit {
  @Input() label: string = '';
  @Input() options: any[] = [];
  @Input() placeholder: string = 'Select an option';
  @Input() isRequired: boolean = true;
  @Input() heading: string = 'Option';
  @Input() control: NgControl | any;

  value: any = '';
  errorMessage: string = '';

  onChange = (_: any) => { };
  onTouched: any = () => { };

  constructor(private validationMessageService: ValidationMessagesService) { }

  ngOnInit(): void {
    this.errorMessage = '';
  }

  ngAfterViewInit(): void {
    // if (this.control && this.control.valueChanges) {
    //   this.control.statusChanges.subscribe(() => {
    //     //this.updateErrorMessage();
    //   });
    // }
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onValueChange(value: any): void {
    this.value = value;
    this.onChange(value);
    this.onTouched();
    this.validate();
  }

  onBlur(): void {
    this.onTouched();
    this.updateErrorMessage();
  }

  public validate(): void {
    if (this.isRequired && !this.value) {
      this.errorMessage = `${this.label} is required.`;
      console.log(this.errorMessage);
    } else {
      this.errorMessage = '';
    }
  }

  private updateErrorMessage(): void {
    if (this.control) {
      this.errorMessage = this.validationMessageService.getValidationMessage(this.control, this.label) ?? '';
      console.log('error 1', this.errorMessage);
    } else {
      this.errorMessage = '';
      console.log('error 2', this.errorMessage);
    }
  }
}
