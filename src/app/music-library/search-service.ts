import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';;

@Injectable()
export class SearchService {
  apiRoot: string = 'https://itunes.apple.com/search';
  results: Object[];
  loading: boolean;

  constructor(private http: HttpClient) {
    (2)
    this.results = [];
    this.loading = false;
  }

  // search(term: string) {
  //   console.log(term)
  //   let promise = new Promise((resolve, reject) => {
  //     let apiUrl = `${this.apiRoot}?term=${term}&media=music&limit=20`;
  //     this.http.get(apiUrl).toPromise().then((res) => {
  //       this.results = res.results;
  //       resolve();
  //     },
  //       msg => { // Error
  //         reject(msg);
  //       })
  //   })
  //   return promise;
  // }

  search(term: string): Observable<any> {
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    return this.http.get(apiURL);
  }


}