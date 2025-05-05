import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
     selector: '[appHilights]'
})
export class HilightsDirective {

     constructor(
          private _elementRef: ElementRef
     ) { }



     @HostListener('mouseenter') onMouseEnter() {
          this._elementRef.nativeElement.style.backgroundColor = 'yellow';
     }




     @HostListener('mouseleave') onMouseLeave() {
          this._elementRef.nativeElement.style.backgroundColor = '';
     }
}
