import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit {

  constructor(private route :ActivatedRoute,private movieService : MovieService) { }

  ngOnInit() {
    this.movieService.getMovieById(this.route.snapshot.params.id)
      .subscribe(response => console.log(response))
  }

}
