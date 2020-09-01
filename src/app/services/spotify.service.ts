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
      'Authorization': 'Bearer BQAGdQw82z2TWo3VGGi4Z1GQeEHSrEHRqkNJaMgFTR-nNIZ11KCetblSfvQ4BWHLhRPMK4cWQFUOhkvjwz8'
    });
    return this.http.get(url, {headers});
   }
   
  getNewMusic(){
 return this.getQuery('browse/new-releases')
  .pipe(map(data => data['albums'].items ));
  //Podemos colocar el typo de dato (data:string), o colocar ['albums'] de esta manera.
}

getArtistas(termino: string){
  return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
 .pipe(map(data=> data['artists'].items ));
  //Puedo simplificar esto ya que es de una sola linea
}

getArtista(id: string){
  return this.getQuery(`artists/${ id }`)
 /* .pipe(map(data=> data['artists'].items )); */
  //Puedo simplificar esto ya que es de una sola linea
} 

getTopTracks(id: string){
  return this.getQuery(`artists/${ id }/top-tracks?country=us`)
  .pipe(map(data=> data['tracks'] ));
  //Puedo simplificar esto ya que es de una sola linea
} 

}
