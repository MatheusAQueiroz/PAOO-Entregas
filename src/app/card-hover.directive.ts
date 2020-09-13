import { Directive, ElementRef, Renderer2, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardHover]'
})
export class CardHoverDirective {

  @HostBinding('style.border') cardBorder;
  @Input('appCardHover') cardBorderInput;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('mouseover') OnMouseHover() {
    this.cardBorder = this.cardBorderInput
  }

  @HostListener('mouseleave') OnMouseLeave() {
    this.cardBorder = '';
  }
}
