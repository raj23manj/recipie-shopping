import { Directive, Renderer2, ElementRef, HostListener, HostBinding} from '@angular/core'

@Directive({
  selector: '[appDropDown]'
})

export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  constructor(private renderer: Renderer2, private elRef: ElementRef ){

  }

  @HostListener('click') toggleOpen(eventData: Event) {
    this.isOpen = !this.isOpen;
  }
}
