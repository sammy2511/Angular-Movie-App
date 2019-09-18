import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IMovie } from '../Interface/movie';
import { IResult } from '../Interface/results';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiToken = 'aa687b50d42533fdcca48bf4ec7eb94b&language=en-US';
  private popularUrl:string = 'https://api.themoviedb.org/3/movie/popular?api_key='+this.apiToken;
  private movieUrl:string ='https://api.themoviedb.org/3/movie/';
  private searchUrl:string='https://api.themoviedb.org/3/search/movie';
  constructor(private httpClient:HttpClient) { }

  getPopular():Observable<IResult>{
    return this.httpClient.get<IResult>(this.popularUrl)
  }

  getMovieById(id:number):Observable<IMovie>{
    return this.httpClient.get<IMovie>(this.movieUrl+id+'?api_key='+this.apiToken)
  }

  getMovieByKeyword(keyword:string):Observable<IResult>{
    return this.httpClient.get<IResult>(
      `${this.searchUrl}?api_key=${this.apiToken}&query=${keyword}&page=1`
    )
  }

}
