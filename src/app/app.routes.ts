import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicComponent } from './music-library/music.component';
import { HelloComponent } from './http/http.component';
import { ArtistComponent } from './music-library/artist.component';
import {AlbumListComponent} from './music-library/album.component'
// import { GenreModule } from './genre/genre.module';

const routes: Routes = [
  { path: '', redirectTo: 'music', pathMatch: 'full' },
  { path: 'music', component: MusicComponent },
  { path: 'http', component: HelloComponent },
  // { path: 'artist/:artistId', component: ArtistComponent, children: [
  //     {path: 'albums', component: AlbumListComponent}
  //   ] },
  // { path: 'http', component: HelloComponent },
  { path: '**', component: MusicComponent },
  // {path: 'genreDummy', component: GenreComponent},
  // { path: 'genre', loadChildren: './genre/genre.module#GenreModule' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
