import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderName'
})
export class OrderNamePipe implements PipeTransform {


  transform(value: any[], arg: any): any[] {
    const sortField = arg[0];
    const sortDirection = arg[1];
    let multiply = 1;

    if (sortDirection === 'asc') {
      multiply = -1;
    }

    value.sort((a: any, b: any) => {
      if (a[sortField] < b[sortField]) {
        return -1 * multiply;
      } else if (a[sortField] > b[sortField]) {
        return 1 * multiply;
      } else {
        return 0;
      }
    });
    return value;
  }

}
