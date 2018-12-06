import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ArtistComponent } from './artist/artist.component';
import { AtistTrastListComponent } from './artist/atist-trast-list/atist-trast-list.component';
import { ArtistAlbumListComponent } from './artist/artist-album-list/artist-album-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: 'search', component:SearchComponent},
  {path: 'artist/:id', component: ArtistComponent,
  children:[
    {path: '', redirectTo: 'track', pathMatch:'full'},
    {path: 'track', component: AtistTrastListComponent},
    {path: 'album', component: ArtistAlbumListComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
