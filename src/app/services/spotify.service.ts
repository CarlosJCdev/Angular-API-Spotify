import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
  /*Si no agregamos el providedIn, debemos importar
  el servicio en el app.module.ts, y agregarlo en la seccion de providers */
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Servicio listo');
   }

   getQuery(query: string){
     const url= `https://api.spotify.com/v1/${ query }`;
     const headers= new HttpHeaders({
      'Authorization': 'Bearer BQCQuz93tRBEVk_jaw18rfBbQTSPUqE_yf2tzGbpxJx1Iwi_RGQ8BVL23XjIFDPHAN_hxKbGiRR43SPTA98'
    });
    return this.http.get(url, {headers});
   }
   

  getNewMusic(){
 return this.getQuery('browse/new-releases')
  .pipe(map(data => data['albums'].items ));
  //Podemos colocar el typo de dato (data:string), o colocar ['albums'] de esta manera.
}


getArtista(termino: string){
  return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
 .pipe(map(data=> data['artists'].items ));
  //Puedo simplificar esto ya que es de una sola linea
}

}
