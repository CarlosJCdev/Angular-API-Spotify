import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {

  artista: any= {};
  loading: boolean;
  topTracks: any[]= [];

  constructor(private routerA: ActivatedRoute, private service: SpotifyService) {
    this.loading= true;
    this.routerA.params.subscribe( params =>{
      this.getArtista(params ['id']);
      this.getTopTracks( params ['id']);
    })
   }

   getArtista(id: string){
    this.loading= true;
    this.service.getArtista(id).subscribe(artista =>{
     /*  console.log(artista); */
      this.artista= artista;
      this.loading= false;
    });
   }

   getTopTracks(id: string){
    this.service.getTopTracks( id ).subscribe( topTracks =>{
      console.log(topTracks);
      this.topTracks= topTracks;
    })
   }
 
}
