import { Pipe, PipeTransform } from '@angular/core';
import { CONSTANTS } from '../utils/constants';

@Pipe({
  name: 'cCurrency'
})
export class CCurrencyPipe implements PipeTransform {
  transform(value: number,symbol:string, ...args: unknown[]): number {
    console.log(CONSTANTS.exchangeRates);
    debugger
    let obj = CONSTANTS.exchangeRates.filter(x=>x.currencyFromCode == symbol && x.currencyToCode==CONSTANTS.currentCurrency)[0];
    if(obj)
    return Number(obj.currencyToValue)*value;
    return value;
  }
}
