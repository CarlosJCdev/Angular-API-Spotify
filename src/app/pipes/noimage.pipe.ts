import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): string {
    //Validamos si al buscar una imagen, no trae imagen de portada osea si el valor es null o undefined
    if( !images){
      return 'assets/img/banner-ico.png';
    } if( images.length >0){
      return images[0].url;
    } else{
      return 'assets/img/banner-ico.png';
    }
  }

}
