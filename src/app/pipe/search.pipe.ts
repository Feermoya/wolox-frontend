import { Pipe, PipeTransform } from '@angular/core';
import { TechsService } from '../services/techs/techs.service';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  constructor(private techsService: TechsService) {

  }

  transform(value: any, arg: any): any {

    let index: number = 0;
    const result = [];
    if (arg.charAt(0) === ' ' || arg.length < 1) return value;

    for (const search of value) {
      if (search.tech.toLowerCase().indexOf(arg.toLowerCase()) > -1 || search.type.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        index++;
        result.push(search);
      }
    }
    this.techsService.numberTechs = index;
    return result;
  }

}
