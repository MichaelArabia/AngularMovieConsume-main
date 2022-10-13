import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginDTO } from 'src/app/models/DTO/loginDTO.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginDTO?: loginDTO;

  form: FormGroup = new FormGroup({
    'email': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required)
  })

  constructor(private _service: AuthService, private router:Router) {}

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.form.valid)
    {
      this.loginDTO = {
        email: this.form.value.email,
        password: this.form.value.password
      }
      this._service.login(this.loginDTO);
      alert("connexion réussie")
    }
    else
    {
      alert("Vous ne passerez pas!")
    };
    this.router.navigate(['home'])
  }

}
