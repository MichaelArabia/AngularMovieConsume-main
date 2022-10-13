import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { registerDTO } from 'src/app/models/DTO/registerDTO.model';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  register?: registerDTO = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    birthDate: undefined
  };

  registerForm!: FormGroup;

  formOptions(){
    this.registerForm = this._builder.group({
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'birthDate': new FormControl('', Validators.required),
    })
  }

  constructor(
    private _registerService: RegisterService,
    private _router:Router,
    private _builder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.formOptions();
  }

  onSubmit(){
    this.register.email = this.registerForm.value['email'],
    this.register.password = this.registerForm.value['password'],
    this.register.firstName = this.registerForm.value['firstName'],
    this.register.lastName = this.registerForm.value['lastName'],
    this.register.birthDate = this.registerForm.value['birthDate'];

    this._registerService.register(this.register).subscribe(() => this._router.navigate(['home']))
}
}
