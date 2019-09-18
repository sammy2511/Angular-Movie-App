import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { IMovie } from '../Interface/movie';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit {

  private movie : IMovie ;

  constructor(private route :ActivatedRoute,private movieService : MovieService,private router : Router) { }

  ngOnInit() {
    this.movieService.getMovieById(this.route.snapshot.params.id)
      .subscribe(movie => {
        this.movie = movie;
        this.movie.poster_path = `http://image.tmdb.org/t/p/w185${this.movie.poster_path}`;
      })
  }

  goBack(){
    this.router.navigate(['/'])
  }
}
