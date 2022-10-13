import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiConsumeService } from 'src/app/services/apiMovie.service';
import { Movie } from 'src/app/models/movie.model';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/app/models/person.model';
import { editMovieDTO } from 'src/app/models/DTO/editMovieDTO.model';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.scss']
})
export class UpdateMovieComponent implements OnInit {

  movieForm?: FormGroup;
  currentMovie?: Movie;
  id?:number;
  listPerson?: Person[];

  editMovie?: editMovieDTO = {
    id: 0,
    title: '',
    description: '',
    releaseYear: 0,
    realisatorID: 0,
    scenaristID: 0
  }

  constructor(
    private _apiConsume: ApiConsumeService,
    private _route:ActivatedRoute,
    private _person: PersonService,
    private builder:FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getPerson();
    this.id = this._route.snapshot.params['id']
    this._apiConsume.getOneMovie(this.id).subscribe({
      next : (data : Movie) => {
        this.currentMovie = data;
        this.formOption();
      }
    })
  }

  getPerson(){
    this._person.getAllPerson().subscribe((data : Person[]) => this.listPerson = data)
  }

  formOption(){
    this.movieForm = this.builder.group({
      'title': [ this.currentMovie.title, [Validators.required, Validators.minLength(2),Validators.maxLength(80)]],
      'description': [ this.currentMovie.description, [Validators.required]],
      'releaseYear': [ this.currentMovie.releaseYear, Validators.required],
      'realisator': [ this.currentMovie.realisator.id, Validators.required],
      'scenarist': [ this.currentMovie.scenarist.id, Validators.required]
    })
  }

  onSubmit(movie : Movie){
    this.editMovie.id = movie.id
    this.editMovie.title = this.movieForm.value['title']
    this.editMovie.description = this.movieForm.value['description']
    this.editMovie.releaseYear = Number.parseInt(this.movieForm.value['releaseYear'])
    this.editMovie.realisatorID = Number.parseInt(this.movieForm.value['realisator'])
    this.editMovie.scenaristID = Number.parseInt(this.movieForm.value['scenarist'])

    this._apiConsume.updateMovie(this.editMovie).subscribe()
    this.router.navigate(['home'])
    }
  }
