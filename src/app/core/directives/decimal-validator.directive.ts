import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDecimalValidator]', //allow decimal upto 2 digit.
})
export class DecimalValidatorDirective {
  @Input() isDecimalNumericValidator : boolean = false;
  private regex: RegExp = new RegExp(/^\d*\.?\d{0,2}$/g);
  private specialKeys: Array<string> = [
    'Backspace',
    'Tab',
    'End',
    'Home',
    //'-',
    'ArrowLeft',
    'ArrowRight',
    'Del',
    'Delete',
  ];
  constructor(private el: ElementRef) {}
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if(this.isDecimalNumericValidator){
      if (this.specialKeys.indexOf(event.key) !== -1) {
        return;
      }
      const current: string = this.el.nativeElement.value;
      const position = this.el.nativeElement.selectionStart;
      const next: string = [
        current.slice(0, position),
        event.key === 'Decimal' ? '.' : event.key,
        current.slice(position),
      ].join('');
      if (next && !String(next).match(this.regex)) {
        event.preventDefault();
      }
    }
  }
}
