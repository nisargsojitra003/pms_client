import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './text-input/text-input.component';
import { FormsModule } from '@angular/forms';
import { TextAreaInputComponent } from './text-area-input/text-area-input.component';
import { SelectInputComponent } from './select-input/select-input.component';
import { RadioInputComponent } from './radio-input/radio-input.component';
import { DateInputComponent } from './date-input/date-input.component';
import { TimeInputComponent } from './time-input/time-input.component';
import { NgSelectComponent } from '@ng-select/ng-select';
import { FileInputComponent } from './file-input/file-input.component';
import { CheckBoxInputComponent } from './check-box-input/check-box-input.component';
import { NumericValidatorDirective } from '../directives/numeric-validator.directive';
import { DecimalValidatorDirective } from '../directives/decimal-validator.directive';
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [
    TextInputComponent,
    TextAreaInputComponent,
    SelectInputComponent,
    RadioInputComponent,
    DateInputComponent,
    TimeInputComponent,
    FileInputComponent,
    CheckBoxInputComponent,
    NumericValidatorDirective,
    DecimalValidatorDirective,
  ],
  imports: [CommonModule, MaterialModule, FormsModule, NgSelectComponent],
  exports: [
    TextInputComponent,
    TextAreaInputComponent,
    SelectInputComponent,
    RadioInputComponent,
    DateInputComponent,
    TimeInputComponent,
    FileInputComponent,
    CheckBoxInputComponent, 
    NumericValidatorDirective,
    DecimalValidatorDirective,
  ],
})
export class HtmlComponentModule { }
