import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarcar]'
})
export class MarcarDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor: string = ''
  @Input('appMarcar') color: string = ''

  constructor() {
  }

  ngOnInit() {
    if (!this.color) {
      this.color = 'yellow'
    }
  }

  @HostListener('mouseover') setColor() {
    this.backgroundColor = this.color
  }

  @HostListener('mouseleave') resetColor() {
    this.backgroundColor = ''
  }

}
