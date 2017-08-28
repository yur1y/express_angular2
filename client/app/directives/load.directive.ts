import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[load-host]',
})
export class LoadDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
