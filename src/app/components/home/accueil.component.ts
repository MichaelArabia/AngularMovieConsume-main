import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { ApiConsumeService } from 'src/app/services/apiMovie.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {


  Movies?: Movie[];

  constructor(
    private _apiMovie: ApiConsumeService,
    private _router:Router) { }

  loadMovie(){
    this._apiMovie.getMovies().subscribe((data : Movie[]) => this.Movies = data)
  }

  onDeleteMovie(id: number){
    this._apiMovie.deleteMovie(id).subscribe();
    this._router.navigate(['home'])
  }

  ngOnInit(): void {
    this.loadMovie()
  }

}


