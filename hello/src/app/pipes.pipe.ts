import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nvl'
})
export class PipesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value || 'n.a';
  }

}
