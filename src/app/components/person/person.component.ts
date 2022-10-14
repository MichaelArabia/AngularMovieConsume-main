import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {


  persons?:Person[];

  loadPersons(){
    this._personService.getAllPerson().subscribe((data : Person[]) => this.persons = data )
  }

  constructor(
    private _personService: PersonService,
    ) { }

  ngOnInit(): void {
    this.loadPersons();
  }

}
