import { Type } from '@angular/core';

export class LoadItem {
  constructor(public component: Type<any>, public data: any) {}
}
