import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist-album-list',
  templateUrl: './artist-album-list.component.html',
  styleUrls: ['./artist-album-list.component.css']
})
export class ArtistAlbumListComponent implements OnInit {
  album= [];
  constructor(
    private itunes: SearchService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getId();
  }

  getId() {
    this.route.parent.params.subscribe(
      param => this.getAlbum(param)
    )
  }
  getAlbum(param) {
    this.itunes.getAlbums(param)
      .then(
        // res => this.setAlbum(res)                // Observable
        res => this.album = res['results'].slice(1)  //Promise
      )
  }
  // setAlbum(res) {
  //   console.log(res);
  //   this.album = res['results'].slice(1);
  // }
}
