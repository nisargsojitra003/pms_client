import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileInputComponent),
      multi: true,
    },
  ],
})
export class FileInputComponent implements ControlValueAccessor {
  @Input() isRequired: boolean = true;
  @Input() isDisabled: boolean = false;
  @Input() maxSizeInMb: number = 5;
  @Input() isMultipleFiles: boolean = false;
  @Input() allowedTypes: string[] = ['image/jpeg', 'image/png', 'image/jpg'];
  @Input() labelText: string = '';
  @Input() isShowPreview: boolean = true;
  @Input() control: NgControl | any;

  imagePreviewSrc: string | ArrayBuffer | null | undefined = '';
  isImageSelected: boolean = false;

  onChange: any = () => { };
  onTouch: any = () => { };

  file: File | null = null;
  fileError: string | null = '';

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input?.files && input.files.length > 0) {
      const file = input.files[0];

      if (!this.allowedTypes.includes(file.type)) {
        this.fileError = `Only ${this.allowedTypes.join(', ')} files are allowed.`;
        this.file = null;
        this.onChange(null);
        return;
      }

      if (file.size > this.maxSizeInMb * 1024 * 1024) {
        this.fileError = `File size must not exceed ${this.maxSizeInMb} MB.`;
        this.file = null;
        this.onChange(null);
        return;
      }

      if (this.isShowPreview) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = (e) => {
          this.imagePreviewSrc = e.target?.result;
          this.isImageSelected = true;
        };
      }

      this.fileError = null;
      this.file = file;
      this.onChange(file);
    } else {
      this.fileError = null;
      this.file = null;
      this.onChange(null);
    }
  }

  writeValue(value: any): void {
    if (value instanceof File) {
      this.file = value;

      if (this.isShowPreview) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(value);

        fileReader.onload = (e) => {
          this.imagePreviewSrc = e.target?.result;
          this.isImageSelected = true;
        };
      }
    } else {
      this.file = null;
      this.imagePreviewSrc = '';
      this.isImageSelected = false;
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }
}
