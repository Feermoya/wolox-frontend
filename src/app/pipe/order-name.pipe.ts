import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderName'
})
export class OrderNamePipe implements PipeTransform {


  transform(value: Array<string>, args: any[]): any {
    const sortField = args[0];
    const sortDirection = args[1];
    let multiply = 1;

    if (sortDirection === 'desc') {
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
