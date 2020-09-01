import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading: boolean;
  newSongs: any[]= [];
  error: boolean;
  mensajeError: string;

  constructor(private spotify: SpotifyService) {
    this.loading= true;
    this.error= false;
    this.spotify.getNewMusic().subscribe((data: any) =>{
      //Pasamos nadamas data, por que en la consulta del servicio definimos especificamente lo que requerimos
      this.newSongs= data;
      this.loading= false;
    }, (errorServicio)=>{
      this.loading= false;
      this.error= true;
      this.mensajeError= errorServicio.error.error.message;
      
    } );
   }

  ngOnInit(): void {
  }

}
