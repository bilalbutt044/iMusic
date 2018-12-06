import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { ArtistComponent } from './artist/artist.component';
import { AtistTrastListComponent } from './artist/atist-trast-list/atist-trast-list.component';
import { ArtistAlbumListComponent } from './artist/artist-album-list/artist-album-list.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    HeaderComponent,
    ArtistComponent,
    AtistTrastListComponent,
    ArtistAlbumListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
