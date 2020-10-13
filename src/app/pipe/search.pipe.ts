import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg.charAt(0) === ' ' || arg.length < 1) return value;
    const resultSearch = [];
    for (const search of value) {
      if (search.tech.toLowerCase().indexOf(arg.toLowerCase()) > -1 || search.type.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultSearch.push(search);
      }
    }
    return resultSearch;
  }

}
