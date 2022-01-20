import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPrimaryColorFont]'
})
export class PrimaryColorFontDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = '#204184'
  }

}
