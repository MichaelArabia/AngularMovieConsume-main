import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { addMovieDTO } from 'src/app/models/DTO/addMovieDTO.model';
import { Person } from 'src/app/models/person.model';
import { ApiConsumeService } from 'src/app/services/apiMovie.service';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  form: FormGroup;
  listPerson: Person[];
  newMovie:addMovieDTO = {
    title : '',
    description : '',
    releaseYear : 0,
    realisatorID : 0,
    scenaristID : 0
  }

  constructor(
    private _person: PersonService,
    private _apiMovie: ApiConsumeService,
    private builder: FormBuilder,
    private router:Router
    ) { }

  formOption(){
    this.form = this.builder.group({
      'title': [ , [Validators.required, Validators.minLength(2),Validators.maxLength(80)]],
      'description': [ , [Validators.required]],
      'releaseYear': [ , Validators.required],
      'realisatorID': [ , Validators.required],
      'scenaristeID': [ , Validators.required]
    })
  }

  getPerson(){
    this._person.getAllPerson().subscribe((data : Person[]) => this.listPerson = data)
  }


  ngOnInit(): void {
    this.getPerson()
    this.formOption()
  }

  onSubmit(){
    this.newMovie.title = this.form.value['title'];
    this.newMovie.description = this.form.value['description'];
    this.newMovie.releaseYear = Number.parseInt(this.form.value['releaseYear']);
    this.newMovie.realisatorID = Number.parseInt(this.form.value['realisatorID']);
    this.newMovie.scenaristID = Number.parseInt(this.form.value['scenaristeID']);

    this._apiMovie.createMovie(this.newMovie).subscribe(() => this.router.navigate(['home']));
    }

}
