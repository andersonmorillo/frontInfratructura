import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string):string{
    if(img === "" || img === undefined){
      return "https://hospitaldb.blob.core.windows.net/images/no-img.jpg";
    }
    return img;
  }
}
