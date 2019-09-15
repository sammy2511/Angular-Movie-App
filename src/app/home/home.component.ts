import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private url = '';
  private movies:any  = [];
  private posterBaseUrl:string = 'http://image.tmdb.org/t/p/w185';

  constructor(private movieService : MovieService,private router : Router) { }

  ngOnInit() {
   this.movieService.getPopular()
    .subscribe(response => {
      let data = JSON.stringify(response);
      let Objects = JSON.parse(data);
      this.movies = Objects.results;
      this.movies.forEach(element => {
        element.poster_path = this.posterBaseUrl + element.poster_path;
      });
    })
  }

  onMovieClick(movie){
    this.router.navigate(['movie/'+movie.id])
  }

}
