import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {
  HttpClientModule
} from "@angular/common/http";
import { AppComponent } from './app.component';
import { HelloComponent } from './http/http.component';
import { MusicComponent } from './music-library/music.component';
import { SearchService } from './music-library/search-service';
// import { ArtistComponent } from './music-library/artist.component';
// import { AlbumComponent } from './music-library/album.component';
import { AppRoutingModule } from './app.routes';
import { GenreModule } from './genre/genre.module'

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, GenreModule],
  declarations: [AppComponent, HelloComponent, MusicComponent],
  bootstrap: [AppComponent],
  providers: [SearchService]
})
export class AppModule { }
