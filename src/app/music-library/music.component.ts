import { Component } from '@angular/core';
import { SearchService } from './search-service';
import { SearchItem } from './search.ts'

@Component({
  selector: 'music',
  templateUrl: 'music.template.html',
  providers: [SearchService]
})
export class MusicComponent {
  private loading: boolean = false;

  results: any;
  constructor(private itunes: SearchService) {

  }
  // doSearch(term) {
  //   this.loading = true;
  //   this.itunes.search(term).then(()=>{
  //     this.loading = false;
  //   })
  // }

  doSearch(term) {
    this.itunes.search(term).subscribe((res) => {
      this.results = res.results.map(item => {
        return new SearchItem(
          item.trackName,
          item.artistName,
          item.trackViewUrl,
          item.artworkUrl30,
          item.artistId
        );
      });
    })
  }

  //using async
  // doSearch(term: string) {
  //   this.loading = true;
  //   this.results = this.itunes.search(term); (1)
  // }
}