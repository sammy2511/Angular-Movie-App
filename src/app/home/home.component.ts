import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';
import { IMovie } from '../Interface/movie';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private url = '';
  private movies:IMovie[]  = [];
  private posterBaseUrl:string = 'http://image.tmdb.org/t/p/w185';

  constructor(private movieService : MovieService,private router : Router) { }

  ngOnInit() {
   this.movieService.getPopular()
    .subscribe(response => {
      this.movies = response.results;
      this.movies.forEach(element => {
        element.poster_path = element.poster_path == null ? 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi91emA4trkAhU_8XMBHWkABs0QjRx6BAgBEAQ&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ANo_picture_available.png&psig=AOvVaw0SyMexFpZ1Ik6TGN-MEM6b&ust=1568909636311373':
        this.posterBaseUrl + element.poster_path;
      });
    })
  }

  onMovieClick(movie){
    this.router.navigate(['movie/'+movie.id])
  }

  search(Input: HTMLInputElement){
    var keyword = Input.value;
    this.movieService.getMovieByKeyword(keyword).subscribe(response =>{
      this.movies = response.results;
      this.movies.forEach(element => {
        element.poster_path = element.poster_path == null ? 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi91emA4trkAhU_8XMBHWkABs0QjRx6BAgBEAQ&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ANo_picture_available.png&psig=AOvVaw0SyMexFpZ1Ik6TGN-MEM6b&ust=1568909636311373':
        this.posterBaseUrl + element.poster_path;
      });
    })
  }

}
