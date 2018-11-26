import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchPlace: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchPlace) {
      return items;
    }
    searchPlace = searchPlace.toLowerCase();
    return items.filter(it => {
      return it.label.toLowerCase().includes(searchPlace);
    });
  }

}
