import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultText'
})
export class DefaultTextPipe implements PipeTransform {

  transform(value: string, defaultValue?: string): string {
    
    if(value == null || value == "" || value == undefined){
      return defaultValue;
    }

    return value;
  }

}
