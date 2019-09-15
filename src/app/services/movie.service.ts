import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiToken = 'aa687b50d42533fdcca48bf4ec7eb94b&language=en-US';
  private popularUrl:string = 'https://api.themoviedb.org/3/movie/popular?api_key='+this.apiToken;
  private movieUrl:string ='https://api.themoviedb.org/3/movie/';

  constructor(private httpClient:HttpClient) { }

  getPopular(){
    return this.httpClient.get(this.popularUrl)
  }

  getMovieById(id:number){
    return this.httpClient.get(this.movieUrl+id+'?api_key='+this.apiToken)
  }

}
