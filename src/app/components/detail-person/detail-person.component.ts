import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { Person } from 'src/app/models/person.model';
import { ApiConsumeService } from 'src/app/services/apiMovie.service';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-detail-person',
  templateUrl: './detail-person.component.html',
  styleUrls: ['./detail-person.component.scss']
})
export class DetailPersonComponent implements OnInit {

  person:Person;

  constructor(
    private _personService : PersonService,
    private _route : ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.getDetail();
  }

  getDetail(){
    const personID = this._route.snapshot.params['id']
    this._personService.getOnePerson(personID).subscribe(data => this.person = data)
  }

}
