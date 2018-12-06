import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id: number;
  artist =[];
  
  constructor(
    private route: ActivatedRoute,
    private itunes: SearchService
  ) { }

  ngOnInit() {
    this.getId();
  }

  getId() {
    this.route.params.subscribe( 
      param => 
      this.getArtist(param)
    )
  }

  getArtist(param) {
   
    this.itunes.getArtist(param)
    .then( res => this.setArtist(res));     
  }

  setArtist(data) {
    this.artist = data['results'][0];
   
  }
}
