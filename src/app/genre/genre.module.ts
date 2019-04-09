import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreComponent } from './genre.component';
import { TrackComponent } from './track/track.component';
import { GenreRoutingModule } from './genre.routing';

@NgModule({
  imports: [CommonModule,GenreRoutingModule],
  declarations: [GenreComponent, TrackComponent],
  // exports: [GenreComponent, TrackComponent]
})
export class GenreModule {

}