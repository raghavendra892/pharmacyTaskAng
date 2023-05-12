// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'searchFilter'
// })
// export class SearchFilterPipe implements PipeTransform {

//   transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }

// }



import { Pipe, PipeTransform } from '@angular/core';
import { IUsers } from '../model/interface';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(value: Array<IUsers>, searchString: string): Array<IUsers> {
    // console.log(value);
    // console.log(searchString);

    if (!searchString) {
      return value;
    }
    if (!value) {
      return [];
    }
    return value.filter((ele) =>
      ele.fullName
        .toLowerCase()
        .trim()
        .includes(searchString.toLowerCase().trim())
    );
  }
}


