import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  apiRoot: string = "https://itunes.apple.com/search";
  result: object= [];
  constructor(private http: HttpClient) { }

  getList(term){
    console.log(term);
     return this.http.get(`${this.apiRoot}?term=${term}&media=music&limit=20`).toPromise();
      
  }

  getArtist(id) {
    console.log(id);
    return this.http.get(`https://itunes.apple.com/lookup?id=${id['id']}`).toPromise();
  }

  getTracks(id){
    console.log(id);
    return this.http.get(`https://itunes.apple.com/lookup?id=${id["id"]}&entity=song`).toPromise();
  }

  getAlbums(id) {
    console.log(id['id']);
    return this.http.get(`https://itunes.apple.com/lookup?id=${id["id"]}&entity=album`).toPromise();
  }
}
