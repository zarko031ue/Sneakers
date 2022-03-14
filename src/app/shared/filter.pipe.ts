import { Pipe, PipeTransform } from '@angular/core';
import { SneakersModel } from '../models/sneakers.model.';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

    // 1: Array of all snickers, 2: What i want to filter,  3: filter by property name , return type: snickerModel[]
    transform(sneakers : SneakersModel[], filterString: string, propName: string): SneakersModel[] {
      const result: SneakersModel[] = []; 
      if(!sneakers || filterString === '' || propName === ''){
        return sneakers;
      }
      sneakers.forEach((sneaker: SneakersModel) => {
        if(sneaker[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
          result.push(sneaker);
        }
      });
      return result;
    }
  
}
