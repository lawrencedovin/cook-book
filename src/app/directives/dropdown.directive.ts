import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  // Toggles the open class add it on and off depending on the condition
  @HostBinding('class.show') isOpen = false;

  @HostListener('click') toggleOpen (eventData: Event) {
    this.isOpen = !this.isOpen;
  }
}
