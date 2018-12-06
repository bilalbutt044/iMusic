import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  song= [];
  constructor(
    private itunes: SearchService
  ) { }

  ngOnInit() {
  }

  search(input: HTMLInputElement) {
   this.itunes.getList(input.value)
   .then( res => 
      // this.setSong(res)
      this.song = res['results']
     );
   input.value = '';
  }

  // setSong(param) {
  //   console.log(param);
  //   this.song = param['results'];
  // }
}