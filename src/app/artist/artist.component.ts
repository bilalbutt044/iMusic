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
     this.route.params.subscribe(
      param => 
      this.itunes.getArtist(param)
      .subscribe(
        res => {
          this.setArtist(res['results'])
        }
      )
    )
    // this.itunes
  }

  setArtist(term) {
    console.log(term);
    this.artist = term[0];
    console.log(this.artist);
  }
}
