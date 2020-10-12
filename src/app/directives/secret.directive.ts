import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSecret]'
})
export class SecretDirective {

  private transparent = 'rgba(0,0,0,0)';

  constructor(private el: ElementRef) {
    this.colorAnswer(this.transparent);
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.colorAnswer('');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.colorAnswer(this.transparent);
  }

   private colorAnswer(color: string): void {
     this.el.nativeElement.style.color = color;
   }

}
