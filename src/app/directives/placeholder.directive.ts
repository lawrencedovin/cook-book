import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPlaceholder]'
})
export class PlaceholderDirective {

  // Gives you access and information to the pointer at the place you've used this directive.
  // public allows us to add viewContainerRef in our DOM and templates and then get access to it
  // using @ViewChild
  constructor(public viewContainerRef: ViewContainerRef) {}

}
