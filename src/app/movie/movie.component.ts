import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movieName:String;
  @Input() movieYear:String;
  @Input() imageUrl:String;

  constructor() { }

  ngOnInit() {
  }

}
