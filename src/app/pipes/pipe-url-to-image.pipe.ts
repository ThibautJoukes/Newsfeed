import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeUrlToImage'
})
export class PipeUrlToImagePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    
    if(value == null || value == "" || value == undefined){
      return "https://images.pexels.com/photos/102720/pexels-photo-102720.jpeg?cs=srgb&dl=finance-financial-times-news-102720.jpg&fm=jpg";
    }

    return value;
  }

}
