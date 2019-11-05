import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeDescription'
})
export class PipeDescriptionPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    
    if(value === null || value === "" || value === undefined){
      return "Dit artikel bevat geen content...";
    }

    return value;
  }
}
