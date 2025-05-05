import { Pipe, PipeTransform } from '@angular/core';
import NumberUtils from '../utils/number.utils';


@Pipe({
     name: 'formatNumber',
})
export class FormatNumberPipe implements PipeTransform {
     transform(value: string | number): string {
          return NumberUtils.formatNumber(value);
     }
}
