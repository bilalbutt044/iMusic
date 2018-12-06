import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/search.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atist-trast-list',
  templateUrl: './atist-trast-list.component.html',
  styleUrls: ['./atist-trast-list.component.css']
})
export class AtistTrastListComponent implements OnInit {
  tracks= [];
  private loading: boolean =false;
  constructor(
    private itunes: SearchService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  getID() {
    this.route.parent.params.subscribe(
      param => this.getTrack(param)
      // console.log(param)
      
    )
  }
  getTrack(param) {
    this.loading = true;
    this.itunes.getTracks(param)
      .then( res => this.setTracks(res) ) 
  }
  setTracks(res) {
    
    console.log(res);
    this.tracks = res['results'].slice(1);
    this.loading = false;
  }

  ngOnInit() {
   this.getID();
  }

  
}

  