import { Pipe, PipeTransform } from '@angular/core';
import { viewClassName } from '@angular/compiler';

@Pipe({
  name: 'formatNum'
})
export class FormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (typeof value !== 'string' || typeof value === 'object') {
      return value;
    }

    const ar = args || 5;

    const v = value + '';

    const n: number  = ar - v.length;
    let prefix = '';

    for (let index = 0; index < n; index++) {
      prefix += '0';
    }

    return '#' + prefix + v;
  }

}
