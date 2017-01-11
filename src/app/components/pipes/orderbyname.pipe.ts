import { Pipe, PipeTransform } from '@angular/core';
import { Skill } from '../skills/skills.component';

@Pipe({ name: "orderByName" })
export class OrderByNamePipe implements PipeTransform {
  transform(array: any[]): any {
    array.sort((a: any, b: any) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
