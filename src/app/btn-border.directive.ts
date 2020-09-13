import { Directive, ElementRef, Renderer2, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBtnBorder]'
})
export class BtnBorderDirective {

  @HostBinding('style.border') btnBorder;
  @Input('appBtnBorder') btnBorderInput;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('mouseover') OnMouseHover() {
    this.btnBorder = this.btnBorderInput
  }

  @HostListener('mouseleave') OnMouseLeave() {
    this.btnBorder = '';
  }
}
