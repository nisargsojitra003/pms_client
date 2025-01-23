import { AfterViewInit, DestroyRef, Directive, inject, Input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appNumericValidator]',
})
export class NumericValidatorDirective implements AfterViewInit {
  private ngControl = inject(NgControl);
  private destroyRef = inject(DestroyRef);
  @Input() isAppNumericValidator: boolean = false;

  ngAfterViewInit(): void {
    if (this.isAppNumericValidator){
      this.ngControl.valueChanges
      ?.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value: string) => {
        const initialValue =
          typeof value === 'string' ? value.replace(/[^0-9]/g, '') : '';

        if (value !== initialValue) {
          this.ngControl.control?.setValue(initialValue, { emitEvent: false });
        }
      });
    }
  }
}
