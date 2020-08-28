import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
  /*Si no agregamos el providedIn, debemos importar
  el servicio en el app.module.ts, y agregarlo en la seccion de providers */
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Servicio listo');
   }

   
getNewMusic(){
  const headers= new HttpHeaders({
    'Authorization': 'Bearer BQDHagPBVFnqy-JMw9ZjbCoWEdbAWDCpac-MHPaQL_VDfyITzPrQt263qWi6v5gJRRaURQcDDXHrNT8BySo'
  });
 return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
}

}
