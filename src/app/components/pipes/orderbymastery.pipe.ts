import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "orderByMastery" })
export class OrderByMastery implements PipeTransform {
  transform(array: any[]): any {
    array.sort((a: any, b: any) => {
      if (a.percentage && b.percentage) {
        return b.percentage - a.percentage; //DESC
      } else {
        return a.name.localCompare(b.name);
      }
    });
    return array;
  }
}
