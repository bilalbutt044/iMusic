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
      this.setArtist(param)
    )
  }
  setArtist(term) {
    this.itunes.getArtist(term)
      .then(
        res => {
          // this.setArtist(res['results'])
          this.artist = res['results'][0];
        }
      )
    // console.log(term);
    // this.artist = term[0];
    // console.log(this.artist);
  }
}
