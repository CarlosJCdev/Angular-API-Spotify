import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newSongs: any[]= [];

  constructor(private spotify: SpotifyService) {
    this.spotify.getNewMusic().subscribe((data: any) =>{
      //Pasamos nadamas data, por que en la consulta del servicio definimos especificamente lo que requerimos
      this.newSongs= data;
    });
   }

  ngOnInit(): void {
  }

}
