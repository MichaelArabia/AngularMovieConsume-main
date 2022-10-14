import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { personDTO } from 'src/app/models/DTO/personDTO.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-addperson',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss']
})
export class AddpersonComponent implements OnInit {

  personForm?: FormGroup;
  newPerson?: personDTO = {
    lastName: '',
    firstName: ''
  }

  formOption(){
    this.personForm = this._builder.group({
      'firstName': [, Validators.required],
      'lastName': [, Validators.required]
    })

  }

  constructor(
    private _servicePerson: PersonService,
    private _builder: FormBuilder,
    private _router:Router
    ) { }

  ngOnInit(): void {
    this.formOption()
  }

  onSubmit(){
    this.newPerson.firstName = this.personForm.value['firstName'];
    this.newPerson.lastName = this.personForm.value['lastName']

    this._servicePerson.createPerson(this.newPerson).subscribe(() => this._router.navigate(['add-Movie']))
  }

}
