import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackComponent } from './track/track.component';
import { GenreComponent } from './genre.component';

const routes: Routes = [

  { path: '', component: GenreComponent },
  { path: 'track', component: TrackComponent },  
  { path: 'genre', component: GenreComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenreRoutingModule { }
