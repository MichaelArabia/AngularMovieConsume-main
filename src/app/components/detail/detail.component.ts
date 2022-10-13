import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { ApiConsumeService } from 'src/app/services/apiMovie.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  movie:Movie;

  constructor(
    private route:ActivatedRoute,
    private _apiService:ApiConsumeService,
    ) { }

  ngOnInit(): void {
    this.getDetail();
  }

  getDetail(){
    const movieId = +this.route.snapshot.paramMap.get('id');
    this._apiService.getOneMovie(movieId).subscribe(data => this.movie = data)
  }

}
