import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'join'})
export class JoinPipe implements PipeTransform {
  transform(value: string[], separator: string): any {
    if (!value) return value;
    return value.join(separator);
  }
}
