import {Component, Input,  ViewChild, ComponentFactoryResolver, OnInit} from '@angular/core';

import { LoadDirective } from '../../directives/load.directive';
import { LoadItem }      from '../../models/load-item';

@Component({
  selector: 'load-temp',
  template: `      
                <ng-template load-host></ng-template>
            `
})
export class ComponentLoader implements OnInit {
  @Input() data: LoadItem;

  @ViewChild(LoadDirective) loadHost: LoadDirective;


  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();

  }

  loadComponent() {
      let adItem = this.data;

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    let viewContainerRef = this.loadHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<ComponentLoader>componentRef.instance).data = adItem.data;
  }
}
